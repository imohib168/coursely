import { styled } from '@mui/system';
import { Box, Container, Typography } from '@mui/material';

export const StyledDetailsBanner = styled(Box)(({ theme }) => ({
  background: '#202020',
  padding: '6rem 0',
  marginBottom: '5rem',
  position: 'relative',
  color: theme.palette.secondary.main,
}));

export const StyledDiagonalBox = styled(Box)(() => ({
  position: 'absolute',
  background: '#202020',
  width: '100%',
  height: '80px',
  marginTop: '4rem',
  transform: 'skewY(-3deg)',
  bottom: '-40px',
}));

export const StyledContainer = styled(Container)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}));

export const StyledSlogan = styled(Typography)(({ theme }) => ({
  fontSize: '22px',
  fontWeight: 500,
  width: '70%',
  textAlign: 'center',
  marginBottom: '2rem',
  color: theme.palette.secondary.main,
  letterSpacing: '1px',
}));

export const StyledOfferedBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '2rem',

  p: { fontSize: '18px', color: theme.palette.white.main },

  a: {
    fontSize: '18px',
    fontWeight: 600,
    color: theme.palette.secondary.main,
    letterSpacing: '1px',
  },
}));

// export const xyz = styled()(() => ({}));
// export const xyz = styled()(() => ({}));
// export const xyz = styled()(() => ({}));
// export const xyz = styled()(() => ({}));
