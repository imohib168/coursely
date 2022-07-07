import React from 'react';
import { StyledMainBox } from '../../styles';
import { UIBlogCard } from '../../components';

const BlogPost = () => {
  return (
    <StyledMainBox>
      {[1, 1].map((_, index) => (
        <UIBlogCard
          key={index}
          title='Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum'
          username='Mohib Ismail'
          time='3m ago'
          blogText='Lorem ipsum  is simply dummy text of the printing and typesetting industry 
        is simply dummy text of the printing and typesetting industry simply dummy text of the printing and typesetting industry
        simply dummy text of the printing and typesetting industry simply dummy text of the printing and typesetting industry
        simply dummy text of the printing and typesetting industry simply dummy text of the printing and typesetting industry
        simply dummy text of the printing and typesetting industry simply dummy text of the printing and typesetting industry'
        />
      ))}
    </StyledMainBox>
  );
};

export default BlogPost;
