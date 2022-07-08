import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const StudentRoute = () => {
  const { user } = useSelector((state) => state.auth);

  const AVAILABLE_ROLES = ['USER'];

  if (user && AVAILABLE_ROLES.includes(user.role)) return <Outlet />;

  return <Navigate to='/' />;
};

export default StudentRoute;
