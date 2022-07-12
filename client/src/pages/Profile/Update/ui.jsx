import { styled } from '@mui/system';
import { Typography } from '@mui/material';

export const StyledHeading = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'mainHeading' && prop !== 'mb',
})(({ theme, mainHeading, mb }) => ({
  fontSize: !mainHeading ? '20px' : '30px',
  fontWeight: 600,
  margin: '12px 0 24px 0',
  marginBottom: mb && mb,
  color: theme.palette.primary.main,
}));
