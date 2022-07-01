import React from 'react';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { appTheme } from '../theme';
import { ErrorLayoutWrapper } from './ui';

const HomeLayout = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline enableColorScheme />
      <ErrorLayoutWrapper>
        <Box>Error</Box>
      </ErrorLayoutWrapper>
    </ThemeProvider>
  );
};

export default HomeLayout;
