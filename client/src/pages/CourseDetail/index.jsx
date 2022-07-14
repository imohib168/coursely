import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container, Grid } from '@mui/material';
import {
  BasicDetailsSection,
  AboutCourseSection,
  FeaturesSection,
} from 'sections';
import { toast } from 'react-toastify';
import { courseById } from 'api/course';
import { styled } from '@mui/system';

export const StyledAboutCourseBox = styled(Box)(() => ({
  background: '#f4f4f4',
  padding: '3rem 0',
  position: 'relative',
}));

export const StyledDiagonalBox = styled(Box)(() => ({
  position: 'absolute',
  background: '#f4f4f4',
  width: '100%',
  height: '100px',
  marginTop: '4rem',
  transform: 'skewY(-3deg)',
  top: '-110px',
}));

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState([]);
  const fetchedCourse = course[0];

  useEffect(() => {
    const getById = async () => {
      try {
        const getCourse = await courseById(id);
        if (getCourse) setCourse(getCourse);
      } catch (error) {
        toast.error(error.message);
      }
    };

    getById();
  }, [course.UserId, id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <BasicDetailsSection course={fetchedCourse} />
      <StyledAboutCourseBox>
        <Container>
          <Grid container justifyContent='space-between' sx={{ mt: 5 }}>
            <Grid item xs={12} md={6.5}>
              <AboutCourseSection course={fetchedCourse} />
            </Grid>

            <Grid item xs={12} md={4.5}>
              <FeaturesSection course={fetchedCourse} />
            </Grid>
          </Grid>
        </Container>
        <StyledDiagonalBox />
      </StyledAboutCourseBox>
    </Box>
  );
};

export default CourseDetail;
