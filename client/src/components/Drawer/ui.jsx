import { styled } from '@mui/system';
import { Divider, Drawer, Typography, ListItemButton } from '@mui/material';

const drawerWidth = 240;

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    backgroundColor: theme.palette.black.main,
    width: drawerWidth,
    boxSizing: 'border-box',
  },
}));

export const StyledLogo = styled(Typography)(({ theme }) => ({
  color: theme.palette.white.main,
  fontSize: '30px',
  fontWeight: 600,
  letterSpacing: '1.5px',
}));

export const StyledDivider = styled(Divider)({
  backgroundColor: 'black',
  marginBottom: '20px',
});

export const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  margin: '0 15px 15px 10px',
  display: 'flex',
  aligItems: 'center',
  padding: '12px',
  borderRadius: '8px',

  svg: {
    color: theme.palette.secondary.main,
    marginRight: '10px',
    fontSize: '26px',
  },

  '&:hover': {
    background: theme.palette.secondary.main,

    svg: {
      color: theme.palette.black.main,
    },

    p: {
      color: theme.palette.black.main,
    },
  },
}));

export const StyledItem = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: '18px',
  fontWeight: 500,
  letterSpacing: '0.5px',
}));
