import React, { useEffect } from 'react';
import { StyledMainBox } from 'styles';
import { Container, Grid } from '@mui/material';
import { CourseSection, CourseFilterSection } from 'sections';
import { courseCategories } from './mockData';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCourses, resetCourse } from 'store/slices/courseSlice';
import { toast } from 'react-toastify';

const Courses = () => {
  const dispatch = useDispatch();
  const { courses, isError, message } = useSelector((state) => state.course);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (isError) toast.error(message);
    dispatch(resetCourse());
  }, [dispatch, isError, message]);

  useEffect(() => {
    dispatch(getAllCourses());
  }, [dispatch]);

  return (
    <StyledMainBox> 
      <Container maxWidth='lg'>
        <Grid container display='flex' justifyContent='space-between'>
          <Grid item xs={12} md={7.9}>
            <CourseSection courses={courses} />
          </Grid>

          <Grid item xs={12} md={3.9}>
            <CourseFilterSection courseCategories={courseCategories} />
          </Grid>
        </Grid>
      </Container>
    </StyledMainBox>
  );
};

export default Courses;
