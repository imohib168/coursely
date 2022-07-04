import { styled } from '@mui/system';
import { Grid, Typography } from '@mui/material';

export const StyledCategoryCard = styled(Grid)(({ theme }) => ({
  a: {
    height: '220px',
    background: theme.palette.white.main,
    color: theme.palette.primary.main,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textDecoration: 'none',
  },
}));

export const StyledCategoryText = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 600,
  textAlign: 'center',
  marginTop: '12px',
}));
