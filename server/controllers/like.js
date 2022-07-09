const asyncHandler = require('express-async-handler');
const { Likes, Blogs } = require('../models');

const likeBlog = asyncHandler(async (req, res) => {
  const { blogId } = req.body;
  const userId = req.user.id;

  const blogExist = await Blogs.findOne({ where: { id: blogId } });

  if (!blogExist) {
    res.status(400).json({ message: 'Blog not found' });
    throw new Error('Blog not found');
  } else {
    const likeExist = await Likes.findOne({
      where: { BlogId: blogId, UserId: userId },
    });

    if (likeExist) {
      await Likes.destroy({ where: { BlogId: blogId, UserId: userId } });
      res.status(200).json({ liked: false });
    } else {
      await Likes.create({ BlogId: blogId, UserId: userId });
      res.status(200).json({ liked: true });
    }
  }
});

module.exports = { likeBlog };
