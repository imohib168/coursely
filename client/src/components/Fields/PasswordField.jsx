import React, { useState } from 'react';
import {
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { StyledFormControl } from './ui';

const UIPasswordField = ({ label }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <StyledFormControl variant='outlined' sx={{ width: '100%' }}>
      <InputLabel htmlFor='outlined-adornment-password'>{label}</InputLabel>
      <OutlinedInput
        label={label}
        InputLabelProps={{ shrink: true }}
        id='outlined-adornment-password'
        type={showPassword ? 'text' : 'password'}
        // value={values.password}
        // onChange={handleChange('password')}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton
              aria-label='toggle password visibility'
              onClick={() => setShowPassword((prevState) => !prevState)}
              edge='end'
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </StyledFormControl>
  );
};

export default UIPasswordField;
