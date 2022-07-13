import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

import { UIButton, UIComment, UISimpleField } from 'components';
import { commentFieldStyles, StyledCommentSectionBox } from './ui';
import { getComments, postComment } from 'store/slices/commentSlice';

const Comments = ({ blogId }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState('');
  const { comments, isError, message } = useSelector((state) => state.comments);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getComments(blogId));
  }, [blogId, dispatch]);

  const handlePostComment = (e) => {
    e.preventDefault();

    if (!comment) {
      toast.error("Comment can't be empty");
    }

    if (comment) {
      dispatch(
        postComment({
          commentText: comment,
          username: user?.username,
          blogId: blogId,
        })
      );
      setComment('');
    }
  };

  useEffect(() => {
    if (isError) toast.error(message);
  }, [comment, isError, message]);

  return (
    <StyledCommentSectionBox id='comment-section'>
      <Typography sx={{ fontWeight: 600, fontSize: '20px' }}>
        {comments && comments.length ? comments.length : 0} Comments
      </Typography>

      <form onSubmit={handlePostComment}>
        <UISimpleField
          type='textarea'
          placeholder='Comment...'
          color='#202020'
          sx={commentFieldStyles}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <UIButton
            variant='contained'
            bgColor='#424242'
            textColor='#eeeeee'
            hoverTextColor='#424242'
            hidden
          >
            Post Comment
          </UIButton>
        </Box>
      </form>

      {comments &&
        comments?.map((comment) => (
          <UIComment
            key={comment.id}
            id={comment.id}
            username={comment.username}
            commentText={comment.commentText}
            time={comment.createdAt}
          />
        ))}
    </StyledCommentSectionBox>
  );
};

export default Comments;
