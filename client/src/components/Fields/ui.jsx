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

export const StyledSimpleField = styled('input', {
  shouldForwardProp: (prop) => prop !== 'color',
})(({ theme, color }) => ({
  flex: 1,
  outline: 'none',
  border: `2px solid ${!color ? 'transparent' : color}`,
  background: 'transparent',
  fontSize: '16px',
  color: !color ? theme.palette.primary.main : color,

  '&:focus': {
    outline: 'none',
    border: `2px solid ${!color ? 'transparent' : color}`,
  },

  '::placeholder': {
    color: !color ? theme.palette.primary.main : color,
  },
}));
