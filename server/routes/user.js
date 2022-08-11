const express = require('express');
const router = express.Router();

const {
  register,
  login,
  profile,
  updateProfile,
  publicProfile,
} = require('../controllers/user.js');
const { authProtect } = require('../middleware/authMiddleware.js');

router.post('/register', register);
router.post('/login', login);
router.get('/profile', authProtect, profile);
router.put('/update', authProtect, updateProfile);
router.get('/public-profile/:id', publicProfile);

module.exports = router;
