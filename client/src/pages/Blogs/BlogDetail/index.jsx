import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Box, Container, Grid } from '@mui/material';
import { BlogSection, CommentsSection, RelatedBlogsSection } from 'sections';
import { StyledDetailRightGrid } from 'pages/Blogs/ui';
import { getBlogById } from 'api/blogs';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const getById = async () => {
      try {
        const getBlog = await getBlogById(id);
        if (getBlog) {
          setBlog(getBlog);
        }
      } catch (error) {
        toast.error(error.message);
      }
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
            <RelatedBlogsSection blog={blog} />
          </StyledDetailRightGrid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogDetail;
