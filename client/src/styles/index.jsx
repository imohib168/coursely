import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

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
