import { styled } from '@mui/system';
import { TextField, FormControl } from '@mui/material';

export const StyledTextField = styled(TextField)(({ theme }) => ({
  width: '100%',

  border: 'none',

  marginBottom: '20px',

  '.MuiOutlinedInput-root': {
    padding: 0,
    borderRadius: '10px',
  },
}));

export const StyledFormControl = styled(FormControl)(() => ({
  '.MuiOutlinedInput-root': {
    padding: 0,
    borderRadius: '10px',

    input: {
      height: 'auto',
    },

    '.MuiInputLabel-root': {
      maxWidth: 0,
    },

    '.MuiInputAdornment-root': {
      button: {
        marginRight: 'auto',
      },
    },
  },
}));
