import { configureStore } from '@reduxjs/toolkit';
import authSlice from 'store/slices/authSlice';
import blogSlice from 'store/slices/blogSlice';
import commentSlice from 'store/slices/commentSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    blogs: blogSlice,
    comments: commentSlice,
  },
});
