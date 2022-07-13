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

  let getBlogs;

  if (!bySearch && !byCategory && !byTitle && !byId) {
    getBlogs = await Blogs.findAll({
      include: [Likes],
    });
  } else {
    getBlogs = await Blogs.findAll({
      include: [Likes],
      order: orders,
      where: filters,
    });
  }

  res.status(200).json(getBlogs);
});

const getblogCategories = asyncHandler(async (req, res) => {
  const getCategories = await db.sequelize.query(
    'SELECT DISTINCT category FROM blogs',
    { model: Blogs, type: QueryTypes.SELECT }
  );

  if (getCategories) {
    res.status(200).json([...getCategories, { category: 'All' }]);
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

  if (newBlog) {
    res.status(200).json(newBlog);
  } else {
    res.status(400).json({ message: `Something went wrong` });
    throw new Error(`Something went wrong`);
  }
});

const getBlogById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const blog = await Blogs.findOne({ where: { id: id }, include: [Likes] });

  if (blog) {
    res.status(200).json([blog]);
  } else {
    res.status(400).json({ message: `Post with this ID: ${id} is not found` });
    throw new Error(`Post with this ID: ${id} is not found`);
  }
});

const deleteBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const deletedBlog = await Blogs.destroy({ where: { id: id } });

  if (deletedBlog) {
    res.status(200).json(id);
  } else {
    res.status(400).json({ message: `Post with this ID: ${id} is not found` });
    throw new Error(`Post with this ID: ${id} is not found`);
  }
});

const getRelatedBlogs = asyncHandler(async (req, res) => {
  const { category, blogId } = req?.query;

  const blogsByCategory = await Blogs.findAll({
    where: { category: category },
  });

  const filteredRelatedBlogs = blogsByCategory.filter(
    (blog) => blog.id != blogId
  );

  if (filteredRelatedBlogs.length > 0) {
    res.status(200).json(filteredRelatedBlogs);
  } else {
    res.status(400).json({ message: 'No Related Blogs' });
  }
});

module.exports = {
  getAllBlogs,
  createBlog,
  getBlogById,
  deleteBlog,
  getRelatedBlogs,
  getblogCategories,
};
