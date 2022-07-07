import React from 'react';
import { Typography } from '@mui/material';
import { UIComment, UISimpleField } from '../../components';
import { commentFieldStyles, StyledCommentSectionBox } from './ui';

const Comments = () => {
  return (
    <StyledCommentSectionBox id='comment-section'>
      <Typography sx={{ fontWeight: 600, fontSize: '20px' }}>
        4 Comments
      </Typography>

      <form>
        <UISimpleField
          type='textarea'
          placeholder='Comment...'
          color='#202020'
          sx={commentFieldStyles}
        />
      </form>

      <UIComment
        username='imohib168'
        commentText='This Blog is helpful This Blog is helpfulThis Blog is helpfulThis Blog is helpfulThis Blog is helpful'
        time='3h ago'
      />
      <UIComment
        username='imohib168'
        commentText='This Blog is helpful'
        time='3h ago'
      />
      <UIComment
        username='imohib168'
        commentText='This Blog is helpful This Blog is helpfulThis Blog is helpful'
        time='3h ago'
      />
      <UIComment
        username='imohib168'
        commentText='This Blog is helpful This Blog is helpful'
        time='3h ago'
      />
    </StyledCommentSectionBox>
  );
};

export default Comments;
