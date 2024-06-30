const express = require('express');
const router = express.Router();
const Reply = require('../models/Reply');

router.post('/', async (req, res) => {
  try {
    const reply = new Reply(req.body);
    await reply.save();
    res.status(201).send(reply);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
