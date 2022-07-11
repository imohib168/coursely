import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { getRelatedBlogs } from 'api/blogs';
import { StyledOtherBlog } from './ui';

const RelatedBlogs = ({ blog }) => {
  const [relatedBlogs, setRelatedBlogs] = useState(null);
  const [hasBlogs, setHasBlogs] = useState(false);

  useEffect(() => {
    const relatedBlogs = async () => {
      try {
        const blogs = await getRelatedBlogs(blog[0]?.category, blog[0]?.id);
        setHasBlogs(true);
        setRelatedBlogs(blogs);
      } catch (error) {
        setHasBlogs(false);
      }
    };
    relatedBlogs();
  }, [blog]);

  const getTitle = (_title) => {
    if (_title.length > 70) return `${_title.slice(0, 70)}...`;
    return _title;
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography sx={{ fontWeight: 600, fontSize: '20px' }}>
        Related Blogs
      </Typography>

      {hasBlogs ? (
        relatedBlogs.map((blog) => (
          <Link
            to={`/blogs/${blog?.id}`}
            style={{ textDecoration: 'none' }}
            key={blog?.id}
          >
            <StyledOtherBlog>
              <Typography>{getTitle(blog.title)}</Typography>
            </StyledOtherBlog>
          </Link>
        ))
      ) : (
        <Box>No Blogs Found</Box>
      )}
    </Box>
  );
};

export default RelatedBlogs;
