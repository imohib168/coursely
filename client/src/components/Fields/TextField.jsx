import React from 'react';
import { StyledTextField } from './ui';

const UITextField = ({ size, label }) => {
  return (
    <StyledTextField size={size} id='demo-helper-text-aligned' label={label} />
  );
};

export default UITextField;
