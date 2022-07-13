import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { appTheme } from 'theme';
import { ErrorLayoutWrapper, StyledBigHeading } from './ui';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline enableColorScheme />
      <ErrorLayoutWrapper>
        <Outlet />
        <StyledBigHeading>ERROR</StyledBigHeading>
      </ErrorLayoutWrapper>
    </ThemeProvider>
  );
};

export default HomeLayout;
