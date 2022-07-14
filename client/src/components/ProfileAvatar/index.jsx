import React, { useState } from 'react';
import ASSETS from 'utils/assets';
import { Avatar, Box, Divider, List } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { StyledDropdown, StyledLink, StyledUserName } from './ui';
import { logout } from 'store/slices/authSlice';
import { useOutsideClick } from 'hook/useOutsideClick';

const UIProfileAvatar = ({ layout }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const handleUserLogout = () => dispatch(logout());
  const [open, setOpen] = useState(false);
  const ref = useOutsideClick(() => setOpen(false));

  return (
    <Box
      ref={ref}
      onClick={() => setOpen((prevState) => !prevState)}
      display='flex'
      alignItems='center'
      sx={{
        position: 'relative',
        cursor: 'pointer',
        userSelect: 'none',
        marginLeft: layout && 'auto',
        zIndex: '9999',
      }}
    >
      <Avatar src={ASSETS.avatar.img} alt={ASSETS.avatar.alt} />
      <StyledUserName layout>
        {user?.firstName} {user?.lastName}
      </StyledUserName>

      {open && (
        <StyledDropdown>
          <List>
            <StyledLink onClick={() => navigate('/profile')}>
              Profile
            </StyledLink>
            <Divider />
            <StyledLink onClick={handleUserLogout}>Logout</StyledLink>
          </List>
        </StyledDropdown>
      )}
    </Box>
  );
};

export default UIProfileAvatar;
