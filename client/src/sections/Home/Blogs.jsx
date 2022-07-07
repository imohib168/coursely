import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Grid, Typography } from '@mui/material';
import ASSETS from '../../utils/assets';
import { UIButton } from '../../components';
import { StyledHeading, StyledImageGrid } from './ui';
import { StyledMainBox } from '../../styles';

const Blogs = () => {
  const naviagte = useNavigate();

  return (
    <Container maxWidth='lg' sx={{ padding: '30px 0px' }}>
      <StyledMainBox>
        <Grid container justifyContent='space-between' alignItems='center'>
          <StyledImageGrid item xs={12} md={5.5}>
            <img src={ASSETS.blog.img} alt={ASSETS.blog.alt} />
          </StyledImageGrid>
          <Grid item xs={12} md={5.5}>
            <StyledHeading>Personal development for smart people</StyledHeading>
            <Typography sx={{ fontSize: '17px' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              atque quidem labore voluptas provident aut quasi sunt itaque
              consectetur.
            </Typography>
            <UIButton
              variant='contained'
              bgColor='#424242'
              textColor='#eeeeee'
              hoverTextColor='#424242'
              onClick={() => naviagte('/blogs')}
              sx={{ width: '100px', marginTop: 3 }}
            >
              Blogs
            </UIButton>
          </Grid>
        </Grid>
      </StyledMainBox>
    </Container>
  );
};

export default Blogs;
