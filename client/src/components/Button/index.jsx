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
    >
      {children}
    </StyledButton>
  );
};

export default UIButton;
