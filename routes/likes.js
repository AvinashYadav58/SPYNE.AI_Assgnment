const express = require('express');
const router = express.Router();
const Discussion = require('../models/Discussion');

router.post('/', async (req, res) => {
  try {
    const { discussionId, userId } = req.body;
    const discussion = await Discussion.findById(discussionId);
    if (!discussion) return res.status(404).send('Discussion not found.');

    discussion.likes.push(userId);
    await discussion.save();
    res.status(201).send(discussion);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
