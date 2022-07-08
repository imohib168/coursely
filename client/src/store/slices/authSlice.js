import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { registerUser, loginUser } from '../../api/auth';

const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      return await registerUser(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    return await loginUser(user);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const logout = createAsyncThunk('auth/logout', () =>
  localStorage.removeItem('user')
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        return { ...state, isLoading: true };
      })
      .addCase(register.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          isSuccess: true,
          user: action.payload,
        };
      })
      .addCase(register.rejected, (state, action) => {
        return {
          ...state,
          isLoading: false,
          isError: true,
          message: action,
          user: null,
        };
      })
      .addCase(login.pending, (state) => {
        return { ...state, isLoading: true };
      })
      .addCase(login.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          isSuccess: true,
          user: action.payload,
        };
      })
      .addCase(login.rejected, (state, action) => {
        return {
          ...state,
          isLoading: false,
          isError: true,
          message: action,
          user: null,
        };
      })
      .addCase(logout.fulfilled, (state) => {
        return { ...state, user: null };
      });
  },
});

export default authSlice.reducer;
