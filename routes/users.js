const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

// Create User
router.post('/', async (req, res) => {
    try {
        console.log(req);
      const { name, mobile, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ name, mobile, email, password: hashedPassword });
      await user.save();
      res.status(201).send(user);
    } catch (error) {
        console.log("error:", error)
      res.status(400).send(error);
    }
  });
  
  // Update User
  router.put('/:id', async (req, res) => {
    try {
      const { name, mobile, email } = req.body;
      const user = await User.findByIdAndUpdate(req.params.id, { name, mobile, email }, { new: true });
      res.send(user);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  // Delete User
  router.delete('/:id', async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  // Show List of Users
  router.get('/', async (req, res) => {
    try {
      const users = await User.find();
      res.send(users);
    } catch (error) {
      res.status(400).send(error);
    }
});

router.get('/search', async (req, res) => {
  try {
    const { name } = req.query;
    const users = await User.find({ name: new RegExp(name, 'i') });
    res.send(users);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
