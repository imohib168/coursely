import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Grid, Typography } from '@mui/material';
import ASSETS from '../../utils/assets';
import { UIButton } from '../../components';
import { StyledMainBox, StyledHeading, StyledImageGrid } from './ui';

const Education = () => {
  const naviagte = useNavigate();
  return (
    <Container>
      <StyledMainBox>
        <Grid container justifyContent='space-between' alignItems='center'>
          <StyledImageGrid item xs={12} md={5.5}>
            <img src={ASSETS.student.img} alt={ASSETS.student.alt} />
          </StyledImageGrid>
          <Grid item xs={12} md={5.5}>
            <StyledHeading sx={{ color: '#424242' }}>
              Transform life through Education!
            </StyledHeading>
            <Typography sx={{ fontSize: '17px' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              atque quidem labore voluptas provident aut quasi sunt itaque
              consectetur. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Dolorum atque quidem labore voluptas provident aut quasi
              sunt itaque consectetur.
            </Typography>
            <UIButton
              variant='contained'
              bgColor='#424242'
              textColor='#eeeeee'
              hoverTextColor='#424242'
              onClick={() => naviagte('/coursess')}
              sx={{ width: '100px', marginTop: 3 }}
            >
              Courses
            </UIButton>
          </Grid>
        </Grid>
      </StyledMainBox>
    </Container>
  );
};

export default Education;
