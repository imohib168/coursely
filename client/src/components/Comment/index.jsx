import React from 'react';
import moment from 'moment';
import { Avatar, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import ASSETS from '../../utils/assets';

const StyledComment = styled(Box)(({ theme }) => ({
  margin: '1.2rem 0rem',
  display: 'flex',
  alignItems: 'center',
}));

const StyledCommentBody = styled(Box)(({ theme }) => ({
  marginLeft: '1rem',

  div: {
    display: 'flex',
    alignItems: 'center',

    p: {
      '&:nth-of-type(1)': {
        fontWeight: 600,
        marginRight: '10px',
      },

      '&:nth-of-type(2)': {
        color: theme.palette.secondary.main,
        fontSize: '11px',
      },
    },
  },
}));

const UIComment = ({ username, commentText, time }) => {
  return (
    <StyledComment>
      <Avatar src={ASSETS.avatar.img} alt={ASSETS.avatar.alt} />
      <StyledCommentBody>
        <Box component='div'>
          <Typography>{username}</Typography>
          <Typography>{moment(time).startOf('hour').fromNow()}</Typography>
        </Box>

        <Typography>{commentText}</Typography>
      </StyledCommentBody>
    </StyledComment>
  );
};

export default UIComment;
