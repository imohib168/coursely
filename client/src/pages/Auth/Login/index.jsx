import React from 'react';
import { Box, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ASSET from '../../../utils/assets';
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

const Login = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Grid container>
        <StyledImageGrid item xs={12} md={6}>
          <StyledImage src={ASSET.login.img} alt={ASSET.login.alt} />
        </StyledImageGrid>

        <StyledFormGrid item xs={12} md={6}>
          <StyledBox>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <lord-icon
                src='https://cdn.lordicon.com/dxjqoygy.json'
                trigger='loop'
                colors='primary:#424242,secondary:#9e9e9e'
                style={{ width: '100px', height: '100px' }}
              />
            </Box>

            <StyledAuthHeading>Welcome Back!</StyledAuthHeading>

            <StyledAuthSlogan>Login to your account</StyledAuthSlogan>

            <StyledForm>
              <Grid container justifyContent='space-around'>
                {/* Email */}
                <Grid item xs={12}>
                  <UITextField label='Email' />
                </Grid>

                {/* Password */}
                <Grid item xs={12}>
                  <UIPasswordField label='Password' />
                </Grid>
              </Grid>

              <StyledButtonContainer>
                <UIButton
                  variant='contained'
                  bgColor='#424242'
                  textColor='#eeeeee'
                  hoverTextColor='#424242'
                  sx={{ borderRadius: '8px', width: '140px' }}
                >
                  Login
                </UIButton>
              </StyledButtonContainer>
            </StyledForm>

            <StyledAuthSlogan noAccText>Have no account yet?</StyledAuthSlogan>
            <StyledButtonContainer centered>
              <UIButton
                variant='outlined'
                textColor='#424242'
                hoverTextColor='#424242'
                onClick={() => navigate('/register', { replace: true })}
                sx={{ borderRadius: '8px', width: '100px' }}
              >
                Register
              </UIButton>
            </StyledButtonContainer>
          </StyledBox>
        </StyledFormGrid>
      </Grid>
    </Box>
  );
};

export default Login;
