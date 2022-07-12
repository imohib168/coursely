import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { Box, Container, Grid } from '@mui/material';
import { UIButton, UITextField } from 'components';
import { StyledErrorMessage, StyledMainBox, StyledHeading } from 'styles';
import { initialValues } from './mockData';
import { courseSchema } from './schema';

const CreateCourse = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(courseSchema),
    defaultValues: initialValues,
  });

  const handlePublishCourse = (data) => {};

  return (
    <StyledMainBox>
      <Container maxWidth='md'>
        <Box display='flex' alignItems='center' justifyContent='space-between'>
          <StyledHeading mainHeading>Create Course</StyledHeading>
        </Box>

        <form onSubmit={handleSubmit(handlePublishCourse)}>
          {/* Basic Details */}
          <StyledHeading>Basic Details</StyledHeading>
          <Grid container justifyContent='space-between'>
            <Grid item xs={12} md={5.9}>
              <Controller
                name='title'
                control={control}
                render={({ field }) => (
                  <>
                    <UITextField label='Course Title' {...field} />
                    <StyledErrorMessage>
                      {errors.title?.message}
                    </StyledErrorMessage>
                  </>
                )}
              />
            </Grid>
            <Grid item xs={12} md={5.9}>
              <Controller
                name='price'
                control={control}
                render={({ field }) => (
                  <>
                    <UITextField label='Price' {...field} />
                    <StyledErrorMessage>
                      {errors.price?.message}
                    </StyledErrorMessage>
                  </>
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name='slogan'
                control={control}
                render={({ field }) => (
                  <>
                    <UITextField multiline label='Slogan' {...field} />
                    <StyledErrorMessage>
                      {errors.slogan?.message}
                    </StyledErrorMessage>
                  </>
                )}
              />
            </Grid>
          </Grid>

          {/* More Details */}
          <StyledHeading>More Details</StyledHeading>
          <Grid container justifyContent='space-between'>
            <Grid item xs={12}>
              <Controller
                name='description'
                control={control}
                render={({ field }) => (
                  <>
                    <UITextField
                      multiline
                      label='Detailed Description'
                      {...field}
                    />
                    <StyledErrorMessage>
                      {errors.description?.message}
                    </StyledErrorMessage>
                  </>
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name='outcome'
                control={control}
                render={({ field }) => (
                  <>
                    <UITextField
                      multiline
                      label='Learning Outcome'
                      {...field}
                    />
                    <StyledErrorMessage>
                      {errors.outcome?.message}
                    </StyledErrorMessage>
                  </>
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name='prereq'
                control={control}
                render={({ field }) => (
                  <>
                    <UITextField multiline label='Prerequisites' {...field} />
                    <StyledErrorMessage>
                      {errors.prereq?.message}
                    </StyledErrorMessage>
                  </>
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name='features'
                control={control}
                render={({ field }) => (
                  <>
                    <UITextField multiline label='Course Features' {...field} />
                    <StyledErrorMessage>
                      {errors.features?.message}
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
              Publish
            </UIButton>
          </Box>
        </form>
      </Container>
    </StyledMainBox>
  );
};

export default CreateCourse;
