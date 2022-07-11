import { Box } from '@mui/material';
import { styled } from '@mui/system';

export const StyledComment = styled(Box)(({ theme }) => ({
  margin: '1.2rem 0rem',
  display: 'flex',
  alignItems: 'center',
}));

export const StyledCommentBody = styled(Box)(({ theme }) => ({
  marginLeft: '1rem',
  width: '100%',

  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    p: {
      '&:nth-of-type(1)': {
        fontWeight: 600,
        marginRight: '10px',
      },

      '&:nth-of-type(2)': {
        color: theme.palette.secondary.main,
        fontSize: '11px',
      },
    },
  },
}));
