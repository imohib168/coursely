import React from 'react';
import { StyledTextField } from './ui';

const UITextField = ({ size, label, ...other }) => {
  const { multiline } = other;

  return multiline ? (
    <StyledTextField
      size={size}
      id='outlined-multiline-flexible'
      label={label}
      {...other}
    />
  ) : (
    <StyledTextField
      size={size}
      id='demo-helper-text-aligned'
      label={label}
      {...other}
    />
  );
};

export default UITextField;
