const express = require('express');
const router = express.Router();
const Follow = require('../models/Follow');

router.post('/', async (req, res) => {
  try {
    const { followerId, followingId } = req.body;
    const follow = new Follow({ follower: followerId, following: followingId });
    await follow.save();
    res.status(201).send(follow);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
