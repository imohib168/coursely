import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import {
  BasicLayout,
  ErrorLayout,
  HomeLayout,
  AuthLayout,
  InstructorLayout,
} from 'layouts';

// Routes
import InstructorRoute from 'routes/instructorAuthRoute';
import StudentRoute from 'routes/studentAuthRoute';
import GeneralRoute from 'routes/generalRoute';
import AuthRoute from 'routes/authRoute';

// Pages
import {
  ErrorPage,
  HomePage,
  LoginPage,
  RegisterPage,
  BlogsPage,
  BlogDetailPage,
  ProfilePage,
  ProfileUpdatePage,
  CreateCoursePage,
  HelpPage,
} from 'pages';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<HomeLayout />}>
        <Route path='/' element={<HomePage />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route element={<AuthRoute />}>
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<RegisterPage />} />
        </Route>
      </Route>

      {/* General Routes */}
      <Route element={<BasicLayout />}>
        <Route element={<GeneralRoute />}>
          <Route path='blogs' element={<BlogsPage />} />
          <Route path='blogs/:id' element={<BlogDetailPage />} />
          <Route path='profile' element={<ProfilePage />} />
          <Route path='profile/update' element={<ProfileUpdatePage />} />
        </Route>
      </Route>

      {/* Instructor Routes */}
      <Route element={<InstructorLayout />}>
        <Route element={<InstructorRoute />}>
          <Route path='ins' element={<Outlet />}>
            <Route path='course/create' element={<CreateCoursePage />} />
            <Route path='course/all' element={<div>Courses</div>} />
            <Route path='course/stats' element={<div>Stats</div>} />
            <Route path='course/help' element={<HelpPage />} />
          </Route>
        </Route>
      </Route>

      {/* Student Routes */}
      <Route element={<BasicLayout />}>
        <Route element={<StudentRoute />}>
          <Route path='std' element={<Outlet />}>
            <Route path='temp' element={<div>Student</div>} />
          </Route>
        </Route>
      </Route>

      {/* 404 Routes */}
      <Route element={<ErrorLayout />}>
        <Route path='*' element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
