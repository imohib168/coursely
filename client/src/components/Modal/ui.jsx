import { Dialog } from '@mui/material';
import { styled } from '@mui/system';

export const StyledDialog = styled(Dialog)(({ theme }) => ({
  '.MuiPaper-root': {
    borderRadius: '10px',
  },

  '& .MuiDialogContent-root': {
    padding: '0.6rem 1rem',
    width: '500px',
  },
  '& .MuiDialogActions-root': {
    padding: '1rem',
  },
}));
