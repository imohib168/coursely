import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { BasicLayout, ErrorLayout, HomeLayout } from '../layouts';

// Routes
import InstructorRoute from './instructorAuthRoute';
import StudentRoute from './studentAuthRoute';

// Pages
import { HomePage } from '../pages';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<HomeLayout />}>
        <Route path='/' element={<HomePage />} />
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
      <Route path='*' element={<ErrorLayout />} />
    </Routes>
  );
};

export default AppRoutes;