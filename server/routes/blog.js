const express = require('express');
const router = express.Router();
const { authProtect } = require('../middleware/authMiddleware.js');

const {
  getAllBlogs,
  createBlog,
  getBlogById,
  deleteBlog,
} = require('../controllers/blog.js');

router.get('/blogs', authProtect, getAllBlogs);
router.post('/create-blog', authProtect, createBlog);
router.get('/get-blog/:id', authProtect, getBlogById);
router.delete('/delete-blog/:id', authProtect, deleteBlog);

module.exports = router;
