import { Search } from '@mui/icons-material';
import { Box, Checkbox, Container, FormControlLabel } from '@mui/material';
import React from 'react';
import { UIChip, UISimpleField } from '../../components';
import { StyledMainBox, StyledSearchBox, StyledIconBox } from '../../styles';
import { StyledCategoryHeading } from './ui';

const BlogFilter = () => {
  return (
    <StyledMainBox>
      <Container maxWidth='lg'>
        <StyledSearchBox width='100%'>
          <UISimpleField
            type='text'
            placeholder='Search by title...'
            sx={{ padding: '8px 12px' }}
          />
          <StyledIconBox>
            <Search />
          </StyledIconBox>
        </StyledSearchBox>

        <Box sx={{ margin: '2rem 0rem' }}>
          <StyledCategoryHeading>Sort Blogs by</StyledCategoryHeading>

          <FormControlLabel
            value='end'
            control={<Checkbox />}
            label='Newest'
            labelPlacement='end'
          />
          <FormControlLabel
            value='end'
            control={<Checkbox />}
            label='Title'
            labelPlacement='end'
          />
        </Box>

        <Box sx={{ margin: '2rem 0rem' }}>
          <StyledCategoryHeading>Blog Categories</StyledCategoryHeading>
          <UIChip label='Programming & Development' />
          <UIChip label='Designing' />
          <UIChip label='Photography' />
          <UIChip label='Business' />
          <UIChip label='Marketing' />
          <UIChip label='Cloud' />
        </Box>
      </Container>
    </StyledMainBox>
  );
};

export default BlogFilter;
