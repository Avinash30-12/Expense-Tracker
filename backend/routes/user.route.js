const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUserProfile
} = require('../controllers/user');
const { protect } = require('../middlewares/authmiddleware');

//Register a new user
router.post('/register', registerUser);

//Login user
router.post('/login', loginUser);

//Get user profile
router.get('/profile', protect, getUserProfile);

module.exports = router;