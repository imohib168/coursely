import { Box, ListItem, Typography } from '@mui/material';
import { styled } from '@mui/system';

export const StyledUserName = styled(Typography)(() => ({
  marginLeft: '8px',
  fontWeight: 500,
  fontSize: '18px',
}));

export const StyledDropdown = styled(Box)(({ theme }) => ({
  position: 'absolute',
  background: theme.palette.white.main,
  top: '50px',
  width: '100%',
  boxShadow: `0px 0px 15px 1px rgba(0, 0, 0, 0.2)`,
  borderRadius: '4px',
}));

export const StyledLink = styled(ListItem)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.black.main,
  padding: '6px 15px',
  fontSize: '16px',
  fontWeight: 500,
  letterSpacing: '1px',
}));
