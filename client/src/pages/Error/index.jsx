import React from 'react';
import { Box, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import ASSETS from '../../utils/assets';
import { UIButton } from '../../components';

import { StyledErrorImgGrid, StyledErrorDetailGrid, buttonStyles } from './ui';

const Error = () => {
  const navigate = useNavigate();

  const gotoHome = () => navigate('/');

  return (
    <Grid container justifyContent='space-around' alignItems='center'>
      <StyledErrorDetailGrid item xs={12} md={5.9}>
        <Box component='div'>
          <Box component='h3'>Something's wrong here...</Box>

          <Box component='p'>We can't find the page you're looking for.</Box>

          <UIButton
            variant='outlined'
            bgColor='#424242'
            textColor='#eeeeee'
            hoverTextColor='#424242'
            sx={buttonStyles}
            onClick={gotoHome}
          >
            Home
          </UIButton>
        </Box>
      </StyledErrorDetailGrid>
      <StyledErrorImgGrid item xs={12} md={5.9}>
        <img src={ASSETS.error.img} alt={ASSETS.error.alt} />
      </StyledErrorImgGrid>
    </Grid>
  );
};

export default Error;
