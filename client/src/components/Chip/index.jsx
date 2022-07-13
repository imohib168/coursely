import React from 'react';
import { Chip } from '@mui/material';
import { styled } from '@mui/system';

const StyledChip = styled(Chip)(({ theme }) => ({
  borderRadius: '10px',
  backgroundColor: theme.palette.black.main,
  color: theme.palette.white.main,
  fontSize: '12px',
  cursor: 'pointer',
  margin: '0px 3px 3px 0px',

  '&:hover': {
    backgroundColor: theme.palette.black.main,
    color: theme.palette.white.main,
  },
}));

const UIChip = ({ handleClick, label, sx }) => {
  return (
    <StyledChip label={label} onClick={() => handleClick(label)} sx={sx} />
  );
};

export default UIChip;
