import { styled } from '@mui/system';
import { Grid, Box, Typography } from '@mui/material';

export const StyledImageGrid = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const StyledImage = styled('img')({
  height: '80%',
});

export const StyledFormGrid = styled(Grid)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  background: '#ffffff',
  borderRadius: '18px',
  width: '80%',
  height: 'auto',
  padding: 8,
}));

export const StyledAuthHeading = styled(Typography)(() => ({
  fontSize: '30px',
  textAlign: 'center',
  margin: '30px 0px 20px 0px',
  fontWeight: 600,
}));

export const StyledAuthSlogan = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'noAccText',
})(({ theme, noAccText }) => ({
  fontSize: '20px',
  color: theme.palette.secondary.main,
  textAlign: 'center',
  width: '60%',
  margin: '0 auto',
  marginBottom: !noAccText ? '30px' : '15px',
  fontWeight: 400,
}));

export const StyledForm = styled('form')(({ theme }) => ({
  padding: 10,
}));

export const StyledButtonContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'centered',
})(({ theme, centered }) => ({
  margin: '18px 0px',
  display: 'flex',
  justifyContent: !centered ? 'end' : 'center',
}));
