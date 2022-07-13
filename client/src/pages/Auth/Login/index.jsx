import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { Box, Grid } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';

import ASSET from 'utils/assets';
import { schema } from './schema';
import { StyledErrorMessage } from 'styles';
import { login, userReset } from 'store/slices/authSlice';
import { UIButton, UIPasswordField, UITextField } from 'components';
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

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isError, message, isSuccess } = useSelector(
    (state) => state.auth
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValue: { email: '', password: '' },
  });

  useEffect(() => {
    if (isError) toast.error(message);

    if (user && isSuccess) {
      toast.success('Login Successfull');
      navigate('/');
    }

    dispatch(userReset());
  }, [dispatch, isError, isSuccess, message, navigate, user]);

  const handleUserLogin = (data) => {
    dispatch(login(data));
  };

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

            <StyledAuthHeading>
              Welcome Back to{' '}
              <Link style={{ textDecoration: 'none' }} to='/'>
                Coursely
              </Link>
            </StyledAuthHeading>

            <StyledAuthSlogan>Login to your account</StyledAuthSlogan>

            <StyledForm onSubmit={handleSubmit(handleUserLogin)}>
              <Grid container justifyContent='space-around'>
                {/* Email */}
                <Grid item xs={12}>
                  <Controller
                    name='email'
                    control={control}
                    render={({ field }) => (
                      <>
                        <UITextField label='email' {...field} />
                        <StyledErrorMessage>
                          {errors.email?.message}
                        </StyledErrorMessage>
                      </>
                    )}
                  />
                </Grid>

                {/* Password */}
                <Grid item xs={12}>
                  <Controller
                    name='password'
                    control={control}
                    render={({ field }) => (
                      <>
                        <UIPasswordField label='Password' {...field} />
                        <StyledErrorMessage>
                          {errors.password?.message}
                        </StyledErrorMessage>
                      </>
                    )}
                  />
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
                onClick={() => navigate('/register')}
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
