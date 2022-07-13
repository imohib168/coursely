import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

export const StyledNavbar = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  padding: '20px 0px',
}));

export const StyledNavbarLogo = styled(Typography)(({ theme }) => ({
  fontSize: '28px',
  fontWeight: 600,
  padding: 0,
  margin: 0,

  a: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
  },
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

export const StyledSearchBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  border: `2px solid ${theme.palette.primary.main}`,
  width: '90%',
}));
