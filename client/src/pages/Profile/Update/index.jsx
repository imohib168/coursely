import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Controller, useForm } from 'react-hook-form';
import { Box, Container, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { UIButton, UITextField } from 'components';
import { StyledErrorMessage, StyledMainBox } from 'styles';
import { StyledHeading } from './ui';
import { update, updateReset } from 'store/slices/authSlice';
import { useNavigate } from 'react-router-dom';

const ProfileUpdate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { user, isError, message, updateSuccess } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user) {
      reset({
        firstName: user?.firstName,
        lastName: user?.lastName,
        phone: user?.phone,
        city: user?.city,
        country: user?.country,
        facebookURL: user?.facebookURL,
        linkedinURL: user?.linkedinURL,
        githubURL: user?.githubURL,
        bio: user?.bio,
      });
    }
  }, [reset, user]);

  useEffect(() => {
    if (isError) toast.error(message);
    if (updateSuccess) {
      toast.success('Profile successfully updated');
      navigate('/profile');
    }

    dispatch(updateReset());
  }, [dispatch, isError, message, navigate, updateSuccess]);

  const handleUpdateProfile = (data) => {
    dispatch(update({ id: user?.id, ...data }));
  };

  return (
    <StyledMainBox>
      <Container maxWidth='md'>
        <Box display='flex' alignItems='center' justifyContent='space-between'>
          <StyledHeading mainHeading>Update Profile</StyledHeading>
          <UIButton
            type='submit'
            bgColor='#424242'
            textColor='#eeeeee'
            hoverTextColor='#424242'
            onClick={() => navigate('/profile')}
          >
            Show Profile
          </UIButton>
        </Box>

        <form onSubmit={handleSubmit(handleUpdateProfile)}>
          {/* Basic Info */}
          <StyledHeading>Basic Info</StyledHeading>
          <Grid container justifyContent='space-between'>
            <Grid item xs={12} md={5.9}>
              <Controller
                name='firstName'
                control={control}
                render={({ field }) => (
                  <>
                    <UITextField label='First Name' {...field} />
                    <StyledErrorMessage>
                      {errors.firstName?.message}
                    </StyledErrorMessage>
                  </>
                )}
              />
            </Grid>
            <Grid item xs={12} md={5.9}>
              <Controller
                name='lastName'
                control={control}
                render={({ field }) => (
                  <>
                    <UITextField label='Last Name' {...field} />
                    <StyledErrorMessage>
                      {errors.lastName?.message}
                    </StyledErrorMessage>
                  </>
                )}
              />
            </Grid>
            <Grid item xs={12} md={5.9}>
              <Controller
                name='phone'
                control={control}
                render={({ field }) => (
                  <>
                    <UITextField label='Phone' {...field} />
                    <StyledErrorMessage>
                      {errors.phone?.message}
                    </StyledErrorMessage>
                  </>
                )}
              />
            </Grid>
            <Grid item xs={12} md={5.9}>
              <Controller
                name='city'
                control={control}
                render={({ field }) => (
                  <>
                    <UITextField label='City' {...field} />
                    <StyledErrorMessage>
                      {errors.city?.message}
                    </StyledErrorMessage>
                  </>
                )}
              />
            </Grid>
            <Grid item xs={12} md={5.9}>
              <Controller
                name='country'
                control={control}
                render={({ field }) => (
                  <>
                    <UITextField label='Country' {...field} />
                    <StyledErrorMessage>
                      {errors.country?.message}
                    </StyledErrorMessage>
                  </>
                )}
              />
            </Grid>
          </Grid>

          {/* Social Links */}
          <StyledHeading>Social Links</StyledHeading>
          <Grid container justifyContent='space-between'>
            <Grid item xs={12} md={5.9}>
              <Controller
                name='facebookURL'
                control={control}
                render={({ field }) => (
                  <>
                    <UITextField label='Facebook URL' {...field} />
                    <StyledErrorMessage>
                      {errors.facebookURL?.message}
                    </StyledErrorMessage>
                  </>
                )}
              />
            </Grid>
            <Grid item xs={12} md={5.9}>
              <Controller
                name='linkedinURL'
                control={control}
                render={({ field }) => (
                  <>
                    <UITextField label='LinkedIn URL' {...field} />
                    <StyledErrorMessage>
                      {errors.linkedinURL?.message}
                    </StyledErrorMessage>
                  </>
                )}
              />
            </Grid>
            <Grid item xs={12} md={5.9}>
              <Controller
                name='githubURL'
                control={control}
                render={({ field }) => (
                  <>
                    <UITextField label='Github URL' {...field} />
                    <StyledErrorMessage>
                      {errors.githubURL?.message}
                    </StyledErrorMessage>
                  </>
                )}
              />
            </Grid>
          </Grid>

          {/* About Me */}
          <StyledHeading>About Me</StyledHeading>
          <Grid container justifyContent='space-between'>
            <Grid item xs={12}>
              <Controller
                name='bio'
                control={control}
                render={({ field }) => (
                  <>
                    <UITextField multiline label='Bio' {...field} />
                    <StyledErrorMessage>
                      {errors.bio?.message}
                    </StyledErrorMessage>
                  </>
                )}
              />
            </Grid>
          </Grid>

          <Box
            sx={{
              paddingBottom: '10px',
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <UIButton
              type='submit'
              bgColor='#424242'
              textColor='#eeeeee'
              hoverTextColor='#424242'
            >
              Save Changes
            </UIButton>
          </Box>
        </form>
      </Container>
    </StyledMainBox>
  );
};

export default ProfileUpdate;
