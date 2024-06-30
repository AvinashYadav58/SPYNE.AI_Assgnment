const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  discussion_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Discussion', required: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  text: { type: String, required: true },
  created_on: { type: Date, default: Date.now },
  likes: { type: Number, default: 0 }
});

module.exports = mongoose.model('Comment', commentSchema);
