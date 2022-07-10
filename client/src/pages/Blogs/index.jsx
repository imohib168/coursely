import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import { BlogPostSection, BlogFilterSection } from '../../sections';
import { StyledRightGrid } from './ui';

const Blogs = () => {
  return (
    <Box sx={{ minHeight: '60vh' }}>
      <Container maxWidth='lg'>
        <Grid container display='flex' justifyContent='space-between'>
          <Grid item xs={12} md={7.9}>
            <BlogPostSection />
          </Grid>

          <StyledRightGrid item xs={12} md={3.9}>
            <BlogFilterSection />
          </StyledRightGrid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Blogs;
