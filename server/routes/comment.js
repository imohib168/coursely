const express = require('express');
const router = express.Router();

const {
  getAllComments,
  addComment,
  deleteComment,
} = require('../controllers/comment.js');
const { authProtect } = require('../middleware/authMiddleware.js');

router.get('/comments/:blogId', authProtect, getAllComments);
router.post('/add', authProtect, addComment);
router.delete('/delete/:commentId', authProtect, deleteComment);

module.exports = router;
