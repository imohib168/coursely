const db = require('../models');
const { Op, QueryTypes } = require('sequelize');
const asyncHandler = require('express-async-handler');
const { Blogs, Likes } = require('../models');

const getAllBlogs = asyncHandler(async (req, res) => {
  const {
    id: byId,
    search: bySearch,
    category: byCategory,
    title: byTitle,
  } = req?.query;

  const filters = {};
  const orders = [];

  if (bySearch) filters.title = { [Op.like]: `%${bySearch}%` };
  if (byCategory) filters.category = byCategory;

  if (byTitle) orders.push(['title', byTitle]);
  if (byId) orders.push(['id', byId]);

  const getBlogs = await Blogs.findAll({
    include: [Likes],
    order: orders,
    where: filters,
  });

  res.status(200).json(getBlogs);
});

const getblogCategories = asyncHandler(async (req, res) => {
  const getCategories = await db.sequelize.query(
    'SELECT DISTINCT category FROM blogs',
    { model: Blogs, type: QueryTypes.SELECT }
  );

  if (getCategories) {
    res.status(200).json(getCategories);
  } else {
    res.status(400).json({ message: 'Something went wrong' });
    throw new Error('Something went wrong');
  }
});

const createBlog = asyncHandler(async (req, res) => {
  const { title, text, username, category } = req.body;
  const userId = req.user.id;

  if (!title || !text || !username || !category) {
    res.status(400).json({ message: 'Please provide all fields' });
    throw new Error('Please provide all fields');
  }

  const newBlog = await Blogs.create({
    title,
    text,
    username,
    UserId: userId,
    category,
  });

  const postBlog = {
    blog: newBlog,
    user: req.user,
  };

  res.status(200).json(postBlog);
});

const getBlogById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const blog = await Blogs.findOne({ where: { id: id }, include: [Likes] });

  if (blog) {
    res.status(200).json(blog);
  } else {
    res.status(400).json({ message: `Post with this ID: ${id} is not found` });
    throw new Error(`Post with this ID: ${id} is not found`);
  }
});

const deleteBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const deletedBlog = await Blogs.destroy({ where: { id: id } });

  if (deletedBlog) {
    res.status(200).json('Post Successfully deleted.');
  } else {
    res.status(400).json({ message: `Post with this ID: ${id} is not found` });
    throw new Error(`Post with this ID: ${id} is not found`);
  }
});

module.exports = {
  getAllBlogs,
  createBlog,
  getBlogById,
  deleteBlog,
  getblogCategories,
};
