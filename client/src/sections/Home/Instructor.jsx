import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Grid, Typography } from '@mui/material';
import ASSETS from '../../utils/assets';
import { UIButton } from '../../components';
import { StyledHeading, StyledImageGrid } from './ui';
import { StyledMainBox } from '../../styles';

const Instructor = () => {
  const naviagte = useNavigate();
  return (
    <StyledMainBox background='#202020'>
      <Container sx={{ padding: '30px 0px' }}>
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
              onClick={() => naviagte('/register')}
              sx={{ marginTop: 3 }}
            >
              Join as Instructor
            </UIButton>
          </Grid>
          <StyledImageGrid item xs={12} md={5.5}>
            <img src={ASSETS.instructor.img} alt={ASSETS.instructor.alt} />
          </StyledImageGrid>
        </Grid>
      </Container>
    </StyledMainBox>
  );
};

export default Instructor;
