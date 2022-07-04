import React from 'react';
import { Box, Grid } from '@mui/material';
import {
  StyledImage,
  StyledImageGrid,
  StyledFormGrid,
  StyledBox,
  StyledAuthHeading,
  StyledAuthSlogan,
  StyledForm,
  StyledButtonContainer,
} from './ui';
import { UIButton, UIPasswordField, UITextField } from '../../../components';
import { useNavigate } from 'react-router-dom';
import ASSET from '../../../utils/assets';

const Register = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Grid container>
        <StyledFormGrid item xs={12} md={6}>
          <StyledBox>
            <StyledAuthHeading>Welcome to Coursely</StyledAuthHeading>

            <StyledAuthSlogan>
              Signup here to get Started and explore the world of learning
            </StyledAuthSlogan>

            <StyledForm>
              <Grid container justifyContent='space-between'>
                {/* First Name */}
                <Grid item xs={12} md={5.9}>
                  <UITextField label='First Name' />
                </Grid>
                {/* Last Name */}
                <Grid item xs={12} md={5.9}>
                  <UITextField label='Last Name' />
                </Grid>
                {/* Username */}
                <Grid item xs={12} md={5.9}>
                  <UITextField label='Username' />
                </Grid>
                {/* Email */}
                <Grid item xs={12} md={5.9}>
                  <UITextField label='Email' />
                </Grid>

                {/* Password */}
                <Grid item xs={12} md={5.9}>
                  <UIPasswordField label='Password' />
                </Grid>
                {/* Confirm Password */}
                <Grid item xs={12} md={5.9}>
                  <UIPasswordField label='Confirm Password' />
                </Grid>
              </Grid>

              <StyledButtonContainer>
                <UIButton
                  variant='contained'
                  bgColor='#424242'
                  textColor='#eeeeee'
                  hoverTextColor='#424242'
                  sx={{ borderRadius: '8px' }}
                >
                  Register
                </UIButton>
              </StyledButtonContainer>
            </StyledForm>

            <StyledAuthSlogan noAccText>
              Already have an account?
            </StyledAuthSlogan>
            <StyledButtonContainer centered>
              <UIButton
                variant='outlined'
                textColor='#424242'
                hoverTextColor='#424242'
                onClick={() => navigate('/login')}
                sx={{ borderRadius: '8px', width: '100px' }}
              >
                Login
              </UIButton>
            </StyledButtonContainer>
          </StyledBox>
        </StyledFormGrid>

        <StyledImageGrid item xs={12} md={6}>
          <StyledImage src={ASSET.register.img} alt={ASSET.register.alt} />
        </StyledImageGrid>
      </Grid>
    </Box>
  );
};

export default Register;
