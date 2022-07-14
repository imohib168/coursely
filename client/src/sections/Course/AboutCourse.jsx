import React from 'react';
import { Typography, Box } from '@mui/material';
import { StyledHeading, StyledMainBox } from 'styles';

const AboutCourse = ({ course }) => {
  return (
    <StyledMainBox>
      <Box sx={{ mb: 3 }}>
        <StyledHeading>About Course</StyledHeading>
        <Typography>{course?.description}</Typography>
      </Box>

      <Box sx={{ mb: 3 }}>
        <StyledHeading>What you'll be learning?</StyledHeading>
        <Typography>{course?.learning_outcome}</Typography>
      </Box>

      <Box sx={{ mb: 3 }}>
        <StyledHeading>Prerequisites</StyledHeading>
        <Typography>{course?.pre_req}</Typography>
      </Box>
    </StyledMainBox>
  );
};

export default AboutCourse;
