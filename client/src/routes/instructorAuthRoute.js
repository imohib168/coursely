import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const InstructorRoute = () => {
  // Get User Role or RoleID
  // const { role } = useSelector();

  const role = 'INSTRUCTOR';
  const AVAILABLE_ROLES = ['INSTRUCTOR'];

  if (AVAILABLE_ROLES.includes(role)) return <Outlet />;

  return <Navigate to='/' replace />;
};

export default InstructorRoute;
