import { Button } from '@mui/material';
import { styled } from '@mui/system';

export const StyledButton = styled(Button, {
  shouldForwardProp: (prop) =>
    prop !== 'bgColor' &&
    prop !== 'textColor' &&
    prop !== 'variant' &&
    prop !== 'hoverTextColor',
})(({ theme, bgColor, textColor, variant, hoverTextColor }) => ({
  backgroundColor: bgColor ? bgColor : 'transparent',
  color: textColor ? textColor : bgColor,
  border: `2px solid ${bgColor ? bgColor : textColor}`,
  transition: '0.3s all ease-in-out',
  padding: '6px 14px',
  fontSize: '14px',
  width: 'auto',
  borderRadius: 0,

  '&:hover': {
    border: `2px solid ${bgColor ? bgColor : hoverTextColor}`,
    background: variant === 'contained' && 'transparent',
    color: hoverTextColor ? hoverTextColor : theme.palette.white.main,
  },
}));
