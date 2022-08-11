import React from 'react';
import { Box, Container } from '@mui/material';
import { StyledHeading, StyledMainBox } from 'styles';
import { OfferedCoursesSection } from 'sections';

const OfferedCourses = () => {
  return (
    <StyledMainBox>
      <Container maxWidth='lg'>
        <Box>
          <StyledHeading mainHeading>Offered Courses</StyledHeading>
        </Box>

        <OfferedCoursesSection />
      </Container>
    </StyledMainBox>
  );
};

export default OfferedCourses;
