const asyncHandler = require('express-async-handler');
const { Comments } = require('../models');

const getAllComments = asyncHandler(async (req, res) => {
  const { blogId } = req.params;

  const getCommentsByPostID = await Comments.findAll({
    where: { BlogId: blogId },
  });

  res.status(200).json(getCommentsByPostID);
});

const addComment = asyncHandler(async (req, res) => {
  const { commentText, username, blogId } = req.body;

  if (!username || !commentText || !blogId) {
    res.status(400).json({ message: 'Please provide all fields' });
    throw new Error('Please provide all fields');
  }

  const newComment = await Comments.create({
    commentText,
    username,
    BlogId: blogId,
  });

  if (newComment) {
    let { user } = newComment;
    user = req.username;

    res.status(200).json({ newComment });
  } else {
    res.status(400).json({ message: 'Can not post comment' });
    throw new Error('Can not post comment');
  }
});

const deleteComment = asyncHandler(async (req, res) => {
  const { commentId } = req.params;

  const commentExist = await Comments.findOne({ where: { id: commentId } });

  if (commentExist) {
    const deletedComment = await Comments.destroy({ where: { id: commentId } });
    if (deletedComment) {
      res.status(200).json(commentId);
    } else {
      res.status(400).json({ message: 'Can not delete comment' });
      throw new Error('Can not post comment');
    }
  } else {
    res.status(400).json({ message: 'Something went wrong' });
    throw new Error('Something went wrong');
  }
});

module.exports = {
  getAllComments,
  addComment,
  deleteComment,
};
