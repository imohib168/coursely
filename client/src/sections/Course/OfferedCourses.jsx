import React, { useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import { UICourseCard } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { getInstructorCourses, resetCourse } from 'store/slices/courseSlice';
import { toast } from 'react-toastify';

const OfferedCourses = () => {
  const dispatch = useDispatch();
  const { courses, isError, message, isSuccess } = useSelector(
    (state) => state.course
  );
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) toast.error(message);

    if (isSuccess) {
      dispatch(resetCourse());
    }
  }, [dispatch, isError, isSuccess, message]);

  useEffect(() => {
    if (user?.id) {
      dispatch(getInstructorCourses(user?.id));
    }
  }, [dispatch, user?.id]);

  return (
    <Grid container justifyContent='space-between'>
      {courses.length ? (
        courses?.map((course) => (
          <Grid key={course.id} item xs={12} sx={{ mb: 2 }}>
            <UICourseCard
              id={course.id}
              title={course?.title}
              slogan={course?.slogan}
              category={course?.category}
            />
          </Grid>
        ))
      ) : (
        <Box>No Courses Available</Box>
      )}
    </Grid>
  );
};

export default OfferedCourses;
