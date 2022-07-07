import React from 'react';
import { StyledMainBox } from '../../styles';
import { UIBlogCard } from '../../components';

const BlogPost = () => {
  const text = `
        Lorem ipsum  is simply dummy text of the printing and typesetting industry 
        is simply dummy text of the printing and typesetting industry simply dummy text of the printing and typesetting industry
        simply dummy text of the printing and typesetting industry simply dummy text of the printing and typesetting industry
        simply dummy text of the printing and typesetting industry simply dummy text of the printing and typesetting industry
        simply dummy text of the printing and typesetting industry simply dummy text of the printing and typesetting industry
  `;

  return (
    <StyledMainBox>
      <UIBlogCard
        isDetailPage
        title='Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum'
        username='Mohib Ismail'
        time='3m ago'
        blogText={text}
      />
    </StyledMainBox>
  );
};

export default BlogPost;
