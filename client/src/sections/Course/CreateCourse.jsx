import React, { useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { Box, Grid } from '@mui/material';
import { UIButton, UISelectField, UITextField } from 'components';
import { StyledErrorMessage, StyledHeading } from 'styles';
import { useDispatch, useSelector } from 'react-redux';
import { createNewCourse, resetCourse } from 'store/slices/courseSlice';
import { toast } from 'react-toastify';

const CreateCourse = ({
  courseSchema,
  initialValues,
  courseCategories,
  courseLevels,
}) => {
  const dispatch = useDispatch();
  const { isError, message, isSuccess } = useSelector((state) => state.course);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(courseSchema),
    defaultValues: initialValues,
  });

  useEffect(() => {
    if (isError) toast.error(message);

    if (isSuccess) {
      toast.success('Course Created');
      reset(initialValues);
    }

    dispatch(resetCourse());
  }, [dispatch, initialValues, isError, isSuccess, message, reset]);

  const handlePublishCourse = (data) => {
    const { prereq, outcome, videoURL, ...rest } = data;

    const newCourse = {
      pre_req: prereq,
      learning_outcome: outcome,
      video: videoURL,
      ...rest,
    };

    dispatch(createNewCourse(newCourse));
  };

  return (
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
                <StyledErrorMessage>{errors.title?.message}</StyledErrorMessage>
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
                <StyledErrorMessage>{errors.price?.message}</StyledErrorMessage>
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
        <Grid item xs={12} md={5.9}>
          <Controller
            name='category'
            control={control}
            render={({ field }) => (
              <>
                <UISelectField
                  {...field}
                  label='Category'
                  options={courseCategories}
                />
                <StyledErrorMessage>
                  {errors.category?.message}
                </StyledErrorMessage>
              </>
            )}
          />
        </Grid>
        <Grid item xs={12} md={5.9}>
          <Controller
            name='videoURL'
            control={control}
            render={({ field }) => (
              <>
                <UITextField label='Course Video' {...field} />
                <StyledErrorMessage>
                  {errors.videoURL?.message}
                </StyledErrorMessage>
              </>
            )}
          />
        </Grid>
        <Grid item xs={12} md={5.9}>
          <Controller
            name='language'
            control={control}
            render={({ field }) => (
              <>
                <UITextField label='Course Language' {...field} />
                <StyledErrorMessage>
                  {errors.language?.message}
                </StyledErrorMessage>
              </>
            )}
          />
        </Grid>
        <Grid item xs={12} md={5.9}>
          <Controller
            name='duration'
            control={control}
            render={({ field }) => (
              <>
                <UITextField label='Course duration (in hours)' {...field} />
                <StyledErrorMessage>
                  {errors.duration?.message}
                </StyledErrorMessage>
              </>
            )}
          />
        </Grid>
        <Grid item xs={12} md={5.9}>
          <Controller
            name='level'
            control={control}
            render={({ field }) => (
              <>
                <UISelectField
                  {...field}
                  label='Course Level'
                  options={courseLevels}
                />
                <StyledErrorMessage>{errors.level?.message}</StyledErrorMessage>
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
                <UITextField multiline label='Learning Outcome' {...field} />
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
  );
};

export default CreateCourse;
