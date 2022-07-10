import React from 'react';
import { StyledSimpleField, StyledTextArea } from './ui';

const UISimpleField = ({
  type,
  placeholder,
  value,
  onChange,
  onClick,
  sx,
  color,
}) => {
  return type === 'textarea' ? (
    <StyledTextArea
      color={color}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onClick={onClick}
      sx={sx}
      rows={3}
    />
  ) : (
    <StyledSimpleField
      color={color}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onClick={onClick}
      sx={sx}
    />
  );
};

export default UISimpleField;
