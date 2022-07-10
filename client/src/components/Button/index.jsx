import React from 'react';
import { StyledButton } from './ui';

const UIButton = ({
  children,
  variant,
  bgColor,
  textColor,
  onClick,
  hoverTextColor,
  sx,
  ...other
}) => {
  return (
    <StyledButton
      disableRipple
      variant={variant}
      bgColor={bgColor}
      textColor={textColor}
      hoverTextColor={hoverTextColor}
      onClick={onClick}
      sx={sx}
      type='submit'
      {...other}
    >
      {children}
    </StyledButton>
  );
};

export default UIButton;
