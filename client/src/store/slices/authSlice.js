import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { registerUser, loginUser, updateProfile } from 'api/auth';

const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  updateSuccess: false,
  isLoading: false,
  message: '',
};

export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      return await registerUser(user);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    return await loginUser(user);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const logout = createAsyncThunk('auth/logout', () =>
  localStorage.removeItem('user')
);

export const update = createAsyncThunk(
  'auth/update',
  async (updatedData, thunkAPI) => {
    try {
      return await updateProfile(updatedData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userReset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
    updateReset: (state) => {
      state.isLoading = false;
      state.updateSuccess = false;
      state.isError = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(register.pending, (state) => {
        return { ...state, isLoading: true };
      })
      .addCase(register.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          isSuccess: true,
          // user: action.payload,
        };
      })
      .addCase(register.rejected, (state, action) => {
        return {
          ...state,
          isLoading: false,
          isError: true,
          message: action.payload.message,
          user: null,
        };
      })
      // Login
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
          message: action.payload.message,
          user: null,
        };
      })
      // Logout
      .addCase(logout.fulfilled, (state) => {
        return { ...state, user: null };
      })
      // Update Profile
      .addCase(update.pending, (state) => {
        return { ...state, isLoading: true };
      })
      .addCase(update.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          updateSuccess: true,
          user: action.payload,
        };
      })
      .addCase(update.rejected, (state, action) => {
        return {
          ...state,
          isLoading: false,
          isError: true,
          user: null,
          message: action.payload.message,
        };
      });
  },
});

export const { userReset, updateReset } = authSlice.actions;
export default authSlice.reducer;
