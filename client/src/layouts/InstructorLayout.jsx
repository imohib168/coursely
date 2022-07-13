import React from 'react';
import { ThemeProvider } from '@mui/system';
import { appTheme } from 'theme';
import { Box, CssBaseline, Toolbar } from '@mui/material';
import { StyledAppBar } from './ui';
import { UIDrawer, UIProfileAvatar } from 'components';
import { Outlet } from 'react-router-dom';

const InstructorLayout = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: 'flex' }}>
        <StyledAppBar position='fixed'>
          <Toolbar>
            <UIProfileAvatar layout />
          </Toolbar>
        </StyledAppBar>

        <UIDrawer />

        <Box component='main' sx={{ flexGrow: 1, p: 2 }}>
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default InstructorLayout;
