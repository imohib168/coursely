import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container, Grid } from '@mui/material';
import {
  BlogSection,
  CommentsSection,
  RelatedBlogsSection,
} from '../../../sections';
import { StyledDetailRightGrid } from '../ui';
import { getBlogById } from '../../../api/blogs';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const getById = async () => {
      const getBlog = await getBlogById(id);
      setBlog(getBlog);
    };

    getById();
  }, [id]);

  return (
    <Box sx={{ minHeight: '80vh' }}>
      <Container maxWidth='lg'>
        <Grid container display='flex' justifyContent='space-between'>
          <Grid item xs={12} md={7.9}>
            <BlogSection blog={blog} />
            <CommentsSection blogId={id} />
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
