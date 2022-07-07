import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const GeneralRoute = () => {
  // Get User Role or RoleID
  // const { role } = useSelector();

  const user = true;

  if (user) {
    return <Outlet />;
  }

  return <Navigate to='/' replace />;
};

export default GeneralRoute;
