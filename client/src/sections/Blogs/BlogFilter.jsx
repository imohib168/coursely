import React, { useState } from 'react';
import { Search } from '@mui/icons-material';
import { Box, Checkbox, Container, FormControlLabel } from '@mui/material';
import {
  UIButton,
  UIChip,
  UIModal,
  UISimpleField,
  UITextField,
} from '../../components';
import { StyledMainBox, StyledSearchBox, StyledIconBox } from '../../styles';
import { StyledCategoryHeading } from './ui';

const BlogFilter = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

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

        <UIButton
          variant='contained'
          bgColor='#202020'
          textColor='#eeeeee'
          hoverTextColor='#202020'
          onClick={() => setOpen(true)}
          sx={{ margin: '10px 0px 0px 0px' }}
        >
          Create Blog
        </UIButton>

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

      <UIModal
        open={open}
        handleClose={handleClose}
        title='Create Blog'
        btnText='Create'
        width='500px'
      >
        <Box sx={{ marginTop: '10px' }}>
          <UITextField label='Title' />
          <UITextField multiline={true} minRows={4} maxRows={4} label='Body' />
          <UITextField label='Category' />
        </Box>
      </UIModal>
    </StyledMainBox>
  );
};

export default BlogFilter;
