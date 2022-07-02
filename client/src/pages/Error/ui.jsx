import { styled } from '@mui/system';
import { Grid, Typography } from '@mui/material';

export const StyledErrorImgGrid = styled(Grid)({
  zIndex: '1',
  img: { height: '100%' },
});

export const StyledErrorDetailGrid = styled(Grid)(({ theme }) => ({
  color: theme.palette.black.main,
  fontFamily: 'Poppins',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  zIndex: '1',

  div: { width: '60%' },

  h3: {
    fontSize: '34px',
    fontWeight: '400',
    margin: '12px 0px',
  },

  p: { fontSize: '18px' },
}));

export const buttonStyles = {
  width: '100px',
  display: 'block',
  margin: '2.5rem 0px 0px 0px',
};
