import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';

export const HomeLayoutWrapper = styled(Box)({});
export const BasicLayoutWrapper = styled(Box)({});

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
