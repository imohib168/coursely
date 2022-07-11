import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import {
  BannerSection,
  CategoriesSection,
  BlogsSection,
  InstructorSection,
  EducationSection,
} from '../../sections';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
