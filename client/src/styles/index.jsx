import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

export const StyledMainBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'background',
})(({ background }) => ({
  backgroundColor: background ? background : 'transparent',
  padding: '30px 0px',
}));

export const StyledSearchBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'width',
})(({ theme, width }) => ({
  display: 'flex',
  alignItems: 'center',
  border: `2px solid ${theme.palette.primary.main}`,
  width: width ? width : '90%',
}));

export const StyledIconBox = styled(Box)(({ theme }) => ({
  backgroundColor: 'transparent',
  color: theme.palette.primary.main,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingRight: '12px',

  svg: {
    fontSize: '24px',
  },
}));

export const StyledErrorMessage = styled(Typography)(() => ({
  marginBottom: '20px',
  fontSize: '13px',
  color: 'red',
}));

export const StyledEditLink = styled(Link)(() => ({
  position: 'absolute',
  top: '10px',
  right: '10px',
  textDecoration: 'none',
  background: '#424242',
  color: '#eeeeee',
  padding: '4px 16px',
}));

export const StyledHeading = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'mainHeading' && prop !== 'mb',
})(({ theme, mainHeading, mb }) => ({
  fontSize: !mainHeading ? '20px' : '30px',
  fontWeight: 600,
  margin: '12px 0 24px 0',
  marginBottom: mb && mb,
  color: theme.palette.primary.main,
}));
