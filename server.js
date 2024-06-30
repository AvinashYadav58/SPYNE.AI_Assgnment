const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Routes
const authRoutes = require('./routes/auth.js');
const userRoutes = require('./routes/users.js');
const discussionRoutes = require('./routes/discussions.js');
const commentRoutes = require('./routes/comments.js');
const followRoutes = require('./routes/follows.js');
const likeRoutes = require('./routes/likes.js');
const replyRoutes = require('./routes/replies.js');

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/discussions', discussionRoutes);
app.use('/comments', commentRoutes);
app.use('/follows', followRoutes);
app.use('/likes', likeRoutes);
app.use('/replies', replyRoutes);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
