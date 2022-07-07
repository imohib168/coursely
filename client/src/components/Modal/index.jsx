import React from 'react';
import { Close } from '@mui/icons-material';
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from '@mui/material';
import { StyledDialog } from './ui';
import UIButton from '../Button';

const BootstrapDialogTitle = ({ children, onClose, ...other }) => {
  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label='close'
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <Close />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export const UIModal = ({
  open,
  children,
  title,
  btnText,
  handleClose,
  width,
}) => {
  return (
    <StyledDialog
      onClose={handleClose}
      aria-labelledby='customized-dialog-title'
      open={open}
    >
      <BootstrapDialogTitle id='customized-dialog-title' onClose={handleClose}>
        {title}
      </BootstrapDialogTitle>

      <DialogContent>{children}</DialogContent>

      <DialogActions>
        <UIButton
          onClick={handleClose}
          bgColor='#424242'
          textColor='#eeeeee'
          hoverTextColor='#424242'
          sx={{ width: '120px', borderRadius: '8px' }}
        >
          {btnText}
        </UIButton>
      </DialogActions>
    </StyledDialog>
  );
};

export default UIModal;
