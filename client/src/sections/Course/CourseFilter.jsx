import React, { useEffect, useState } from 'react';
import { Box, Checkbox, Container, FormControlLabel } from '@mui/material';

import { UIChip, UISelectField } from 'components';
// import { StyledMainBox, StyledSearchBox, StyledIconBox } from 'styles';
import { StyledCategory, StyledCategoryHeading } from 'sections/Blogs/ui';
import { Controller, useForm } from 'react-hook-form';
import { levels } from './mockData';
import { useDispatch } from 'react-redux';
import { getAllCourses } from 'store/slices/courseSlice';

const CourseFilter = ({ courseCategories }) => {
  const dispatch = useDispatch();
  const { control, watch } = useForm({ defaultValues: { levels: '' } });
  const level = watch('levels');

  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    dispatch(getAllCourses({ title, category, level }));
  }, [category, dispatch, level, title]);

  const onCategorySelect = (label) => {
    if (label === 'All') setCategory('');
    else setCategory(label);
  };

  return (
    <Container sx={{ backgroundColor: '#fff', py: 2 }} maxWidth='lg'>
      <Box sx={{ mb: 2 }}>
        <StyledCategoryHeading>Sort Courses</StyledCategoryHeading>

        <FormControlLabel
          value={title}
          onChange={(e) => setTitle(e.target.checked ? 'asc' : '')}
          control={<Checkbox />}
          label='Title (A - Z)'
        />
      </Box>

      <Box>
        <Controller
          name='levels'
          control={control}
          render={({ field }) => (
            <UISelectField {...field} label='Level' options={levels} />
          )}
        />
      </Box>

      <Box sx={{ margin: '2rem 0rem' }}>
        <StyledCategoryHeading>
          Blog Categories
          <StyledCategory>({`${category ? category : 'All'}`})</StyledCategory>
        </StyledCategoryHeading>
        {courseCategories?.map((category, index) => (
          <UIChip
            key={index}
            label={category.category}
            handleClick={onCategorySelect}
          />
        ))}
      </Box>
    </Container>
  );
};

export default CourseFilter;
