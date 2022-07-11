import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { StyledMainBox } from 'styles';
import { UIBlogCard } from 'components';
import { getBlogs } from 'store/slices/blogSlice';

const BlogPost = () => {
  const dispatch = useDispatch();

  const { blogs } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  return (
    <StyledMainBox>
      {blogs?.map((blog) => (
        <UIBlogCard
          id={blog.id}
          key={blog.id}
          title={blog.title}
          username={blog.username}
          time={blog.createdAt}
          blogText={blog.text}
          category={blog.category}
        />
      ))}
    </StyledMainBox>
  );
};

export default BlogPost;
