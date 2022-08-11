import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createCourse, instructorCourses, allCourses } from 'api/course';

const initialState = {
  courses: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const createNewCourse = createAsyncThunk(
  'courses/create',
  async (courseData, thunkAPI) => {
    try {
      return await createCourse(courseData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getInstructorCourses = createAsyncThunk(
  'courses/InstructorOffered',
  async (instructorId, thunkAPI) => {
    try {
      return await instructorCourses(instructorId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getAllCourses = createAsyncThunk(
  'courses/all',
  async ({ category, level, title }, thunkAPI) => {
    try {
      return await allCourses(category, level, title);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    resetCourse: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      // Create Course
      .addCase(createNewCourse.pending, (state) => {
        return { ...state, isLoading: true };
      })
      .addCase(createNewCourse.fulfilled, (state, action) => {
        return {
          ...state,
          isSuccess: true,
          isLoading: false,
          courses: [...state.courses, action.payload],
        };
      })
      .addCase(createNewCourse.rejected, (state, action) => {
        return {
          ...state,
          courses: null,
          isLoading: false,
          isError: true,
          message: action.payload.message,
        };
      })
      // Get Instructor Offered Courses
      .addCase(getInstructorCourses.pending, (state) => {
        return { ...state, isLoading: true };
      })
      .addCase(getInstructorCourses.fulfilled, (state, action) => {
        return {
          ...state,
          courses: action.payload,
          isLoading: false,
          isSuccess: true,
        };
      })
      .addCase(getInstructorCourses.rejected, (state, action) => {
        return {
          ...state,
          courses: null,
          isLoading: false,
          isError: true,
          message: action.payload.message,
        };
      })
      // Get All courses
      .addCase(getAllCourses.pending, (state) => {
        return { ...state, isLoading: true };
      })
      .addCase(getAllCourses.fulfilled, (state, action) => {
        return {
          ...state,
          courses: action.payload,
          isLoading: false,
          isSuccess: true,
        };
      })
      .addCase(getAllCourses.rejected, (state, action) => {
        return {
          ...state,
          courses: null,
          isLoading: false,
          isError: true,
          message: action.payload.message,
        };
      });
  },
});

export const { resetCourse } = courseSlice.actions;
export default courseSlice.reducer;
