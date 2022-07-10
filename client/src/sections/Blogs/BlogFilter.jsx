import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Search } from '@mui/icons-material';
import { Box, Checkbox, Container, FormControlLabel } from '@mui/material';
import { UIButton, UIChip, UIModal, UISimpleField } from '../../components';
import { StyledMainBox, StyledSearchBox, StyledIconBox } from '../../styles';
import { StyledCategory, StyledCategoryHeading } from './ui';
import { getBlogs } from '../../store/slices/blogSlice';
import CreateBlogModal from './CreateBlogModal';
import { getBlogCategories } from '../../api/blogs';

const BlogFilter = () => {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blogs);

  const [search, setSearch] = useState('');
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState('');
  const [blogCategories, setBlogCategories] = useState([]);

  useEffect(() => {
    dispatch(getBlogs({ search, id, title, category }));
  }, [category, dispatch, id, search, title]);

  useEffect(() => {
    const getCategories = async () => {
      const categories = await getBlogCategories();
      setBlogCategories(categories);
    };

    getCategories();
  }, [blogs]);

  const onCategorySelect = (label) => {
    if (label === 'All') setCategory('');
    else setCategory(label);
  };

  const handleClose = () => setOpen(false);

  return (
    <StyledMainBox>
      <Container maxWidth='lg'>
        <StyledSearchBox width='100%'>
          <UISimpleField
            type='text'
            placeholder='Search by title...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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
            value={id}
            onChange={(e) => setId(e.target.checked ? 'desc' : 'asc')}
            control={<Checkbox />}
            label='Newest'
          />
          <FormControlLabel
            value={title}
            onChange={(e) => setTitle(e.target.checked ? 'asc' : '')}
            control={<Checkbox />}
            label='Title (A - Z)'
          />
        </Box>

        <Box sx={{ margin: '2rem 0rem' }}>
          <StyledCategoryHeading>
            Blog Categories{' '}
            <StyledCategory>
              ({`${category ? category : 'All'}`})
            </StyledCategory>
          </StyledCategoryHeading>
          {blogCategories?.map((category, index) => (
            <UIChip
              key={index}
              label={category.category}
              handleClick={onCategorySelect}
            />
          ))}
        </Box>
      </Container>

      <UIModal
        open={open}
        title='Create Blog'
        handleClose={handleClose}
        btnText='Create'
        width='500px'
      >
        <Box sx={{ marginTop: '10px' }}>
          <CreateBlogModal setOpen={setOpen} />
        </Box>
      </UIModal>
    </StyledMainBox>
  );
};

export default BlogFilter;
