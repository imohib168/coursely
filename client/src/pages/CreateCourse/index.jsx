import React from 'react';
import { Box, Container } from '@mui/material';
import { StyledMainBox, StyledHeading } from 'styles';
import { courseCategories, initialValues } from './mockData';
import { courseSchema } from './schema';
import { CreateCourseSection } from 'sections';

const CreateCourse = () => {
  return (
    <StyledMainBox>
      <Container maxWidth='md'>
        <Box display='flex' alignItems='center' justifyContent='space-between'>
          <StyledHeading mainHeading>Create Course</StyledHeading>
        </Box>

        <CreateCourseSection
          courseSchema={courseSchema}
          courseCategories={courseCategories}
          initialValues={initialValues}
        />
      </Container>
    </StyledMainBox>
  );
};

export default CreateCourse;
