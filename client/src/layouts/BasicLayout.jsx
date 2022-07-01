import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { AppFooter, AppNavbar } from '../components';
import { appTheme } from '../theme';
import { BasicLayoutWrapper } from './ui';

const BasicLayout = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline enableColorScheme />
      <BasicLayoutWrapper>
        <AppNavbar />
        <Outlet />
        <AppFooter />
      </BasicLayoutWrapper>
    </ThemeProvider>
  );
};

export default BasicLayout;
