import { styled } from '@mui/system';
import { AppBar, Box, Typography } from '@mui/material';

// Home Layout
export const HomeLayoutWrapper = styled(Box)({});

// Basic Layout
export const BasicLayoutWrapper = styled(Box)({});

// Auth Layout
export const AuthLayoutWrapper = styled(Box)({ minHeight: '100vh' });

// Error Layout
export const ErrorLayoutWrapper = styled(Box)({
  position: 'relative',
  overflow: 'hidden',
  height: '100vh',
});

export const StyledBigHeading = styled(Typography)(() => ({
  position: 'fixed',
  fontSize: '500px',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: '#E8E8E8',
  fontWeigth: '700',

  userSelect: 'none',
  WebkitUserSelect: 'none',
  KhtmlUserSelect: 'none',
  MozUserSelect: 'none',
  msUserSelect: 'none',
}));

// Instructor Layout
const drawerWidth = 240;

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.black.main,
  width: `calc(100% - ${drawerWidth}px)`,
  marginLeft: `${drawerWidth}px`,
  boxShadow: 'none',
}));
