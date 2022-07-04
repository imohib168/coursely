import React from 'react';
import { Box } from '@mui/material';
import {
  BannerSection,
  CategoriesSection,
  BlogsSection,
  InstructorSection,
  EducationSection,
} from '../../sections';

const Home = () => {
  return (
    <Box>
      <BannerSection />
      <CategoriesSection />
      <BlogsSection />
      <InstructorSection />
      <EducationSection />
    </Box>
  );
};

export default Home;
