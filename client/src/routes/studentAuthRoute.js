import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const StudentRoute = () => {
  // Get User Role or RoleID
  // const { role } = useSelector();

  const role = 'USER';
  const AVAILABLE_ROLES = ['USER'];

  if (AVAILABLE_ROLES.includes(role)) return <Outlet />;

  return <Navigate to='/' replace />;
};

export default StudentRoute;
