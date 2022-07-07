import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container, Grid } from '@mui/material';
import {
  BlogSection,
  CommentsSection,
  RelatedBlogsSection,
} from '../../../sections';
import { StyledDetailRightGrid } from '../ui';

const BlogDetail = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <Box sx={{ minHeight: '80vh' }}>
      <Container maxWidth='lg'>
        <Grid container display='flex' justifyContent='space-between'>
          <Grid item xs={12} md={7.9}>
            <BlogSection />
            <CommentsSection />
          </Grid>

          <StyledDetailRightGrid item xs={12} md={3.9}>
            <RelatedBlogsSection />
          </StyledDetailRightGrid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogDetail;
