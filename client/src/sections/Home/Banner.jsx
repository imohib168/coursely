import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container, Grid, Typography } from '@mui/material';

import ASSETS from 'utils/assets';
import { UIButton } from 'components';
import { StyledHeading, StyledImageGrid } from './ui';
import { StyledMainBox } from 'styles';

const Banner = () => {
  const naviagte = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const handleNavigate = () => {
    if (user?.roleId === 2) {
      naviagte('/courses');
    } else {
      naviagte('/register');
    }
  };

  return (
    <Container maxWidth='lg'>
      <StyledMainBox>
        <Grid container justifyContent='space-between' alignItems='center'>
          <Grid item xs={12} md={5.5}>
            <StyledHeading>Explore the world of Learning!</StyledHeading>
            <Typography sx={{ fontSize: '17px' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              atque quidem labore voluptas provident aut quasi sunt itaque
              consectetur.
            </Typography>
            {user?.roleId !== 1 && (
              <UIButton
                variant='contained'
                bgColor='#424242'
                textColor='#eeeeee'
                hoverTextColor='#424242'
                onClick={handleNavigate}
                sx={{ width: '100px', marginTop: 3 }}
              >
                {user?.roleId === 2 ? 'Courses' : 'Join'}
              </UIButton>
            )}
          </Grid>
          <StyledImageGrid item xs={12} md={5.5}>
            <img src={ASSETS.explore.img} alt={ASSETS.explore.alt} />
          </StyledImageGrid>
        </Grid>
      </StyledMainBox>
    </Container>
  );
};

export default Banner;
