const express = require('express');
const router = express.Router();
const User = require('../models/User.js');

// Fetch all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
