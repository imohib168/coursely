import React from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { Outlet } from 'react-router-dom';
import { AppFooter, AppNavbar } from 'components';
import { appTheme } from 'theme';
import { HomeLayoutWrapper } from './ui';

const HomeLayout = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline enableColorScheme />
      <HomeLayoutWrapper>
        <AppNavbar />
        <Outlet />
        <AppFooter />
      </HomeLayoutWrapper>
    </ThemeProvider>
  );
};

export default HomeLayout;
