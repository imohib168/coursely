const express = require('express');
const router = express.Router();
const { authProtect } = require('../middleware/authMiddleware.js');

const {
  getAllBlogs,
  createBlog,
  getBlogById,
  deleteBlog,
  getblogCategories,
  getRelatedBlogs,
} = require('../controllers/blog.js');

router.get('/blogs', authProtect, getAllBlogs);
router.post('/create-blog', authProtect, createBlog);
router.get('/get-blog/:id', authProtect, getBlogById);
router.delete('/delete-blog/:id', authProtect, deleteBlog);
router.get('/categories', authProtect, getblogCategories);
router.get('/related-blogs', authProtect, getRelatedBlogs);

module.exports = router;
