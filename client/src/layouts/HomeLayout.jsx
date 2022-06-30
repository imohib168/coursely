import React from 'react';
import { Outlet } from 'react-router-dom';
import { AppFooter, AppNavbar } from '../components';
import { HomeLayoutWrapper } from './ui';

const HomeLayout = () => {
  return (
    <HomeLayoutWrapper>
      <AppNavbar />
      <Outlet />
      <AppFooter />
    </HomeLayoutWrapper>
  );
};

export default HomeLayout;
