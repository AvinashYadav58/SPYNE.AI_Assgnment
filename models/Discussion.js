const mongoose = require('mongoose');

const discussionSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  text: { type: String, required: true },
  image: { type: String },
  hashtags: [{ type: String }],
  created_on: { type: Date, default: Date.now },
  view_count: { type: Number, default: 0 }
});

module.exports = mongoose.model('Discussion', discussionSchema);
