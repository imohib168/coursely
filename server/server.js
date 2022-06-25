const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
var bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

dotenv.config();

//  -- Routes --

// 1. Users
const userRoute = require('./routes/user.js');
app.use('/api/user', userRoute);

// 2. Blogs
const blogsRoute = require('./routes/blog.js');
app.use('/api/blog', blogsRoute);

// 3. Comments
const commentRoute = require('./routes/comment.js');
app.use('/api/comment', commentRoute);

// 4. Like Blog
const LikeRoute = require('./routes/like.js');
app.use('/api/like', LikeRoute);

// Database connection
const db = require('./models');
const PORT = process.env.PORT || 5000;

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
