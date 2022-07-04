import React from 'react';
import { StyledSimpleField } from './ui';

const UISimpleField = ({
  type,
  placeholder,
  value,
  onChnage,
  onClick,
  sx,
  color,
}) => {
  return (
    <StyledSimpleField
      color={color}
      type={type}
      placeholder={placeholder}
      value={value}
      onChnage={onChnage}
      onClick={onClick}
      sx={sx}
    />
  );
};

export default UISimpleField;
