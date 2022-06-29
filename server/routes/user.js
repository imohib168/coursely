const express = require('express');
const router = express.Router();

const {
  register,
  login,
  profile,
  updateProfile,
} = require('../controllers/user.js');
const { authProtect } = require('../middleware/authMiddleware.js');

router.post('/register', register);
router.post('/login', login);
router.get('/profile', authProtect, profile);
router.put('/update', authProtect, updateProfile);

module.exports = router;
