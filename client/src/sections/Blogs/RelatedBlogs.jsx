import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { StyledOtherBlog } from './ui';

const RelatedBlogs = () => {
  const title = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Architecto porro voluptates dolores ducimus! Cumque iure quas, qui
    amet dolores dolore repellendus porro reiciendis. Vel nostrum
    consequatur corrupti. Atque, pariatur eaque.`;

  const getTitle = (_title) => {
    if (_title.length > 70) return `${_title.slice(0, 70)}...`;
    return _title;
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography sx={{ fontWeight: 600, fontSize: '20px' }}>
        Related Blogs
      </Typography>

      {[1, 1, 1].map((_, index) => (
        <Link to='/blogs/3' style={{ textDecoration: 'none' }} key={index}>
          <StyledOtherBlog>
            <Typography>{getTitle(title)}</Typography>
          </StyledOtherBlog>
        </Link>
      ))}
    </Box>
  );
};

export default RelatedBlogs;
