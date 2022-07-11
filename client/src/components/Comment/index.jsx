import React, { useEffect } from 'react';
import moment from 'moment';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Box, Typography } from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';
import { styled } from '@mui/system';
import ASSETS from '../../utils/assets';
import { delComment } from '../../store/slices/commentSlice';

const StyledComment = styled(Box)(({ theme }) => ({
  margin: '1.2rem 0rem',
  display: 'flex',
  alignItems: 'center',
}));

const StyledCommentBody = styled(Box)(({ theme }) => ({
  marginLeft: '1rem',
  width: '100%',

  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

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

const UIComment = ({ id, username, commentText, time }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { commentError, message } = useSelector((state) => state.comments);

  useEffect(() => {
    if (commentError) toast.error(message);
  }, [commentError, message]);

  const handleDeleteComment = () => {
    dispatch(delComment(id));
    toast.success('Comment Successfully deleted');
  };

  return (
    <StyledComment>
      <Avatar src={ASSETS.avatar.img} alt={ASSETS.avatar.alt} />
      <StyledCommentBody>
        <Box component='div'>
          <Box>
            <Typography>{username}</Typography>
            <Typography>{moment(time).startOf('hour').fromNow()}</Typography>
          </Box>

          {user.username === username && (
            <DeleteOutline
              onClick={handleDeleteComment}
              sx={{ cursor: 'pointer' }}
              color='secondary'
            />
          )}
        </Box>

        <Typography>{commentText}</Typography>
      </StyledCommentBody>
    </StyledComment>
  );
};

export default UIComment;
