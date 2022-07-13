import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { appTheme } from 'theme';
import { AuthLayoutWrapper } from './ui';

const BasicLayout = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline enableColorScheme />
      <AuthLayoutWrapper>
        <Outlet />
      </AuthLayoutWrapper>
    </ThemeProvider>
  );
};

export default BasicLayout;
