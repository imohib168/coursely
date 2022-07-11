import React from 'react';
import { StyledMainBox } from 'styles';
import { UIBlogCard } from 'components';

const BlogPost = ({ blog }) => {
  const _blog = blog[0];

  return (
    <StyledMainBox>
      {_blog && (
        <UIBlogCard
          isDetailPage
          id={_blog?.id}
          title={_blog?.title}
          username={_blog?.username}
          time={_blog?.createdAt}
          blogText={_blog?.text}
          category={_blog?.category}
        />
      )}
    </StyledMainBox>
  );
};

export default BlogPost;
