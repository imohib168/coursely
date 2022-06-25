const asyncHandler = require('express-async-handler');
const { Blogs, Likes } = require('../models');

const getAllBlogs = asyncHandler(async (req, res) => {
  const getBlogs = await Blogs.findAll({ include: [Likes] });

  res.status(200).json(getBlogs);
});

const createBlog = asyncHandler(async (req, res) => {
  const { title, text, username } = req.body;
  const userId = req.user.id;

  if (!title || !text || !username) {
    res.status(400);
    throw new Error('Please provide all fields');
  }

  const newBlog = await Blogs.create({ title, text, username, UserId: userId });

  const postBlog = {
    blog: newBlog,
    user: req.user,
  };

  res.status(200).json(postBlog);
});

const getBlogById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const blog = await Blogs.findOne({ where: { id: id } });

  if (blog) {
    res.status(200).json(blog);
  } else {
    res.status(400);
    throw new Error(`Post with this ID: ${id} is not found`);
  }
});

const deleteBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const deletedBlog = await Blogs.destroy({ where: { id: id } });

  if (deletedBlog) {
    res.status(200).json('Post Successfully deleted.');
  } else {
    res.status(400);
    throw new Error(`Post with this ID: ${id} is not found`);
  }
});

module.exports = {
  getAllBlogs,
  createBlog,
  getBlogById,
  deleteBlog,
};
