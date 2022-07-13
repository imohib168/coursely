import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Grid, Typography } from '@mui/material';

import ASSETS from 'utils/assets';
import { UIButton, UIModal } from 'components';
import { StyledMainBox } from 'styles';
import { StyledHeading, StyledImageGrid } from './ui';
import { logout, userReset } from 'store/slices/authSlice';

const Instructor = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [modalOpen, setModalOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(userReset());
    setModalOpen(false);
    setTimeout(() => {
      navigate('/register');
    }, 100);
  };

  const handleNavigate = () => {
    if (user?.roleId === 1) {
      navigate('/ins/course/all');
    } else {
      if (user) setModalOpen(true);
      else navigate('/register');
    }
  };

  return (
    <StyledMainBox background='#202020'>
      <Container maxWidth='lg' sx={{ padding: '30px 0px' }}>
        <Grid container justifyContent='space-between' alignItems='center'>
          <Grid item xs={12} md={5.5}>
            <StyledHeading sx={{ color: '#eeeeee' }}>
              Become an Instructor
            </StyledHeading>
            <Typography sx={{ fontSize: '17px', color: '#eeeeee' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              atque quidem labore voluptas provident aut quasi sunt itaque
              consectetur. dolor sit amet consectetur adipisicing elit. Dolorum
              atque quidem labore voluptas provident aut quasi sunt itaque
              consectetur.
            </Typography>
            <UIButton
              variant='contained'
              bgColor='#eeeeee'
              textColor='#424242'
              hoverTextColor='#eeeeee'
              onClick={handleNavigate}
              sx={{ marginTop: 3 }}
            >
              {user?.roleId === 1
                ? 'Instructor Dashboard'
                : 'Join as Instructor'}
            </UIButton>
          </Grid>
          <StyledImageGrid item xs={12} md={5.5}>
            <img src={ASSETS.instructor.img} alt={ASSETS.instructor.alt} />
          </StyledImageGrid>
        </Grid>
      </Container>

      <UIModal
        open={modalOpen}
        handleClose={() => setModalOpen(false)}
        title='Logout Confirmation'
      >
        <Box sx={{ padding: '6px 0' }}>
          <Typography sx={{ fontSize: '16px' }}>
            This might Result in Signing out from your account. Are you Sure?
          </Typography>

          <Box sx={{ padding: '20px 0 0 0' }}>
            <UIButton
              type='submit'
              bgColor='#424242'
              textColor='#eeeeee'
              hoverTextColor='#424242'
              onClick={handleLogout}
            >
              Logout
            </UIButton>
          </Box>
        </Box>
      </UIModal>
    </StyledMainBox>
  );
};

export default Instructor;
