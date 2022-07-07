import { Box, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

export const StyledBlogCard = styled(Box)({
  backgroundColor: '#ffffff',
  width: '90%',
  padding: '20px',
  marginBottom: '20px',
});

export const StyledBlogDetailText = styled(Box)(({ theme }) => ({
  marginLeft: '10px',

  p: {
    '&:nth-child(1)': { fontWeight: 600 },
    '&:nth-child(2)': { color: theme.palette.secondary.main, fontSize: '12px' },
  },
}));

export const StyledBottomGrid = styled(Grid)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
});

export const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.secondary.main,
}));

export const StyledBlogTitle = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  fontWeight: 600,
  fontSize: '22px',
  color: theme.palette.black.main,
}));
