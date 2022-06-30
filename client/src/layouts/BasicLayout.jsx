import React from 'react';
import { Outlet } from 'react-router-dom';
import { AppFooter, AppNavbar } from '../components';
import { BasicLayoutWrapper } from './ui';

const BasicLayout = () => {
  return (
    <BasicLayoutWrapper>
      <AppNavbar />
      <Outlet />
      <AppFooter />
    </BasicLayoutWrapper>
  );
};

export default BasicLayout;
