import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const InstructorRoute = () => {
  const { user } = useSelector((state) => state.auth);
  const AVAILABLE_ROLES = ['INSTRUCTOR'];

  if (user && AVAILABLE_ROLES.includes(user.role)) return <Outlet />;

  return <Navigate to='/' />;
};

export default InstructorRoute;
