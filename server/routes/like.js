const express = require('express');
const router = express.Router();

const { likeBlog } = require('../controllers/like.js');
const { authProtect } = require('../middleware/authMiddleware.js');

router.post('/add', authProtect, likeBlog);

module.exports = router;
