import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAllBlogs,
  createBlog,
  // deleteBlog,
  getBlogCategories,
} from '../../api/blogs';

const initialState = {
  blogs: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const getBlogs = createAsyncThunk(
  'blogs/getAll',
  async ({ search = '', id = '', title = '', category = '' }, thunkAPI) => {
    try {
      return await getAllBlogs(id, search, title, category);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const postBlog = createAsyncThunk(
  'blogs/create',
  async (blogData, thunkAPI) => {
    try {
      return await createBlog(blogData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getCategories = createAsyncThunk(
  'blogs/blogCategories',
  async (thunkAPI) => {
    try {
      return await getBlogCategories();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      // Get All Blogs
      .addCase(getBlogs.pending, (state) => {
        return { ...state, isLoading: true };
      })
      .addCase(getBlogs.fulfilled, (state, action) => {
        return {
          ...state,
          blogs: action.payload,
          isLoading: false,
          isSuccess: true,
        };
      })
      .addCase(getBlogs.rejected, (state, action) => {
        return {
          ...state,
          blogs: null,
          isLoading: false,
          isError: true,
          message: action.payload.message,
        };
      })
      //   Create Blog
      .addCase(postBlog.pending, (state) => {
        return { ...state, isLoading: true };
      })
      .addCase(postBlog.fulfilled, (state, action) => {
        return {
          ...state,
          blogs: [...state.blogs, action.payload],
          isLoading: false,
          isSuccess: true,
        };
      })
      .addCase(postBlog.rejected, (state, action) => {
        return {
          ...state,
          blogs: null,
          isLoading: false,
          isError: true,
          message: action.payload.message,
        };
      });
  },
});

// export const { userReset } = authSlice.actions;
export default blogSlice.reducer;
