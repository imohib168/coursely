import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { BasicLayout, ErrorLayout, HomeLayout, AuthLayout } from '../layouts';

// Routes
import InstructorRoute from './instructorAuthRoute';
import StudentRoute from './studentAuthRoute';
import GeneralRoute from './generalRoute';

// Pages
import {
  ErrorPage,
  HomePage,
  LoginPage,
  RegisterPage,
  BlogsPage,
} from '../pages';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<HomeLayout />}>
        <Route path='/' element={<HomePage />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path='login' element={<LoginPage />} />
        <Route path='register' element={<RegisterPage />} />
      </Route>

      <Route element={<BasicLayout />}>
        <Route element={<GeneralRoute />}>
          <Route path='blogs' element={<BlogsPage />} />
        </Route>
      </Route>

      {/* Instructor Routes */}
      <Route element={<BasicLayout />}>
        <Route element={<InstructorRoute />}>
          <Route path='ins' element={<Outlet />}>
            <Route path='temp' element={<div>Instructor</div>} />
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
