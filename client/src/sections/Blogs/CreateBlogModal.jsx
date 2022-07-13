import React from 'react';
import * as yup from 'yup';
import { Box } from '@mui/material';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';

import { UIButton, UITextField } from 'components';
import { StyledErrorMessage } from 'styles';
import { postBlog } from 'store/slices/blogSlice';

const schema = yup.object({
  title: yup.string().required('Title is required'),
  text: yup.string().required('Blog text is required'),
  category: yup.string().required('Category is required'),
});

const CreateBlogModal = ({ setOpen }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { isError, message } = useSelector((state) => state.blogs);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValue: { title: '', text: '', category: '' },
  });

  const handleCreateBlog = (data) => {
    if (isError) toast.error(message);
    else {
      dispatch(postBlog({ username: user?.username, ...data }));
      setOpen(false);
      toast.success('Blog successfully posted');
    }
  };

  return (
    <form onSubmit={handleSubmit(handleCreateBlog)}>
      <Controller
        name='title'
        control={control}
        render={({ field }) => (
          <>
            <UITextField label='Title' {...field} />
            <StyledErrorMessage>{errors.title?.message}</StyledErrorMessage>
          </>
        )}
      />

      <Controller
        name='text'
        control={control}
        render={({ field }) => (
          <>
            <UITextField
              multiline={true}
              minRows={4}
              maxRows={4}
              label='Body'
              {...field}
            />
            <StyledErrorMessage>{errors.text?.message}</StyledErrorMessage>
          </>
        )}
      />

      <Controller
        name='category'
        control={control}
        render={({ field }) => (
          <>
            <UITextField label='Category' {...field} />
            <StyledErrorMessage>{errors.category?.message}</StyledErrorMessage>
          </>
        )}
      />

      <Box
        sx={{
          paddingBottom: '10px',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <UIButton
          type='submit'
          bgColor='#424242'
          textColor='#eeeeee'
          hoverTextColor='#424242'
          sx={{ width: '120px', borderRadius: '8px' }}
        >
          Create
        </UIButton>
      </Box>
    </form>
  );
};

export default CreateBlogModal;
