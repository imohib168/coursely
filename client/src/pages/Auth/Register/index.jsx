import React from 'react';
import { Box, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
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
import {
  UIButton,
  UIPasswordField,
  UISelectField,
  UITextField,
} from '../../../components';
import { Link, useNavigate } from 'react-router-dom';
import ASSET from '../../../utils/assets';
import { schema } from './schema';
import { fieldsData, initialValues, roleOptions } from './mockData';
import { register } from '../../../store/slices/authSlice';
import { toast } from 'react-toastify';
import { StyledErrorMessage } from '../../../styles';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isError, message, isSuccess } = useSelector((state) => state.auth);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), defaultValue: initialValues });

  const handleUserRegister = (data) => {
    const { confirmPassword, ...userData } = data;
    dispatch(register(userData));

    if (isError) toast.error(message);

    if (isSuccess) {
      reset(initialValues);
      toast.success('Account has been created');
    }
  };

  return (
    <Box>
      <Grid container>
        <StyledFormGrid item xs={12} md={6}>
          <StyledBox>
            <StyledAuthHeading>
              Welcome to{' '}
              <Link style={{ textDecoration: 'none' }} to='/'>
                Coursely
              </Link>
            </StyledAuthHeading>

            <StyledAuthSlogan>
              Signup here to get Started and explore the world of learning
            </StyledAuthSlogan>

            <StyledForm onSubmit={handleSubmit(handleUserRegister)}>
              <Grid container justifyContent='space-between'>
                {fieldsData?.map(({ name, label }) => (
                  <Grid key={name} item xs={12} md={5.9}>
                    <Controller
                      name={name}
                      control={control}
                      render={({ field }) => (
                        <>
                          <UITextField label={label} {...field} />
                          <StyledErrorMessage>
                            {errors[name]?.message}
                          </StyledErrorMessage>
                        </>
                      )}
                    />
                  </Grid>
                ))}

                {/* Role */}
                <Grid item xs={12} md={5.9}>
                  <Controller
                    name='role'
                    control={control}
                    render={({ field }) => (
                      <>
                        <UISelectField
                          {...field}
                          label='Role'
                          options={roleOptions}
                        />
                        <StyledErrorMessage>
                          {errors.role?.message}
                        </StyledErrorMessage>
                      </>
                    )}
                  />
                </Grid>

                {/* Password */}
                <Grid item xs={12} md={5.9}>
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
                {/* Confirm Password */}
                <Grid item xs={12} md={5.9}>
                  <Controller
                    name='confirmPassword'
                    control={control}
                    render={({ field }) => (
                      <>
                        <UIPasswordField label='Confirm Password' {...field} />
                        <StyledErrorMessage>
                          {errors.confirmPassword?.message}
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
