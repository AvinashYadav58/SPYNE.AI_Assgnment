const express = require('express');
const router = express.Router();
const Discussion = require('../models/Discussion');

router.post('/', async (req, res) => {
  try {
    const discussion = new Discussion(req.body);
    await discussion.save();
    res.status(201).send(discussion);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const discussion = await Discussion.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(discussion);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Discussion.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/:id/view', async (req, res) => {
  try {
    const discussion = await Discussion.findById(req.params.id);
    if (!discussion) return res.status(404).send('Discussion not found.');

    discussion.view_count += 1;
    await discussion.save();
    res.send(discussion);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/search', async (req, res) => {
  try {
    const { hashtags } = req.query;
    const discussions = await Discussion.find({ hashtags: { $in: hashtags.split(',') } });
    res.send(discussions);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Search discussions by hashtags
router.get('/tags', async (req, res) => {
    try {
      const { hashtags } = req.query.tags;
      console.log('hashtags:', hashtags);
      const tagsArray = hashtags.split(',').map(tag => tag.trim());
      const discussions = await Discussion.find({ hashtags: { $in: tagsArray } });
      res.send(discussions);
    } catch (error) {
      res.status(400).send(error);
    }
});


module.exports = router;
