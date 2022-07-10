import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCommentsByBlogId, postCommentOnBlog } from '../../api/comments';

const initialState = {
  comments: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const getComments = createAsyncThunk(
  'comment/getCommentById',
  async (id, thunkAPI) => {
    try {
      return await getCommentsByBlogId(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const postComment = createAsyncThunk(
  'comment/postComment',
  async (commentData, thunkAPI) => {
    try {
      return await postCommentOnBlog(commentData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const commentSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    resetComments: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getComments.pending, (state) => {
        return { ...state, isLoading: true };
      })
      .addCase(getComments.fulfilled, (state, action) => {
        return {
          ...state,
          comments: action.payload,
          isLoading: false,
          isSuccess: true,
        };
      })
      .addCase(getComments.rejected, (state, action) => {
        return {
          ...state,
          comments: null,
          isLoading: false,
          isError: true,
          message: action.payload.message,
        };
      })
      // Post comment
      .addCase(postComment.pending, (state) => {
        return { ...state, isLoading: true };
      })
      .addCase(postComment.fulfilled, (state, action) => {
        console.log(state, action.payload);
        return {
          ...state,
          isLoading: false,
          isSuccess: true,
          comments: [...state.comments, action.payload.newComment],
        };
      })
      .addCase(postComment.rejected, (state, action) => {
        return {
          ...state,
          comments: null,
          isLoading: false,
          isError: true,
          message: action.payload.message,
        };
      });
  },
});

export const { resetComments } = commentSlice.actions;
export default commentSlice.reducer;