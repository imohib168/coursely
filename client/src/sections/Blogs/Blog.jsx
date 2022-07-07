import React from 'react';
import { Box, Typography } from '@mui/material';
import { StyledMainBox } from '../../styles';
import { UIBlogCard } from '../../components';

const BlogPost = () => {
  const category = null;

  return (
    <StyledMainBox>
      {category && (
        <Typography
          variant='h5'
          sx={{ marginBottom: '20px', textAlign: 'right !important' }}
        >
          Category:{' '}
          <Box component='span' sx={{ fontSize: '18px', fontWeight: 600 }}>
            {category}
          </Box>
        </Typography>
      )}

      <UIBlogCard
        isDetailPage
        title='Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum'
        username='Mohib Ismail'
        time='3m ago'
        blogText='Lorem ipsum  is simply dummy text of the printing and typesetting industry 
        is simply dummy text of the printing and typesetting industry simply dummy text of the printing and typesetting industry
        simply dummy text of the printing and typesetting industry simply dummy text of the printing and typesetting industry
        simply dummy text of the printing and typesetting industry simply dummy text of the printing and typesetting industry
        simply dummy text of the printing and typesetting industry simply dummy text of the printing and typesetting industry'
      />
    </StyledMainBox>
  );
};

export default BlogPost;
