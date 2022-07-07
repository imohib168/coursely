import { Grid } from '@mui/material';
import { styled } from '@mui/system';

export const StyledImageGrid = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const StyledHeading = styled(Grid)(({ theme }) => ({
  fontSize: '36px',
  fontWeight: 600,
  marginBottom: '20px',
  color: theme.palette.black.main,
}));
