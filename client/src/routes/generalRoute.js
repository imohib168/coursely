import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const GeneralRoute = () => {
  const { user } = useSelector((state) => state.auth);

  if (user) {
    return <Outlet />;
  }

  return <Navigate to='/' replace />;
};

export default GeneralRoute;
