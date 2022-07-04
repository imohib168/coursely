import React from 'react';
import { Link } from 'react-router-dom';
import { StyledCategoryCard, StyledCategoryText } from './ui';

const UICategoryCard = ({ category, src }) => {
  const iconSrc = `https://cdn.lordicon.com/${src}.json`;

  return (
    <StyledCategoryCard xs={12} md={3.8} sx={{ marginBottom: '20px' }}>
      <Link to='/login'>
        <lord-icon
          src={iconSrc}
          trigger='loop'
          colors='primary:#202020,secondary:#9e9e9e'
          style={{ width: '100px', height: '100px' }}
        />

        <StyledCategoryText>{category}</StyledCategoryText>
      </Link>
    </StyledCategoryCard>
  );
};

export default UICategoryCard;
