import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Toolbar, List, ListItem } from '@mui/material';
import { drawerMenuItems } from './mock-data';
import {
  StyledDrawer,
  StyledLogo,
  StyledListItemButton,
  StyledItem,
} from './ui';

const UIDrawer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <StyledDrawer variant='permanent' anchor='left'>
      <Toolbar>
        <StyledLogo to='/'>Coursely</StyledLogo>
      </Toolbar>
      <List sx={{ marginTop: '25px' }}>
        {drawerMenuItems.map(({ id, label, Icon, link }) => (
          <ListItem key={id} sx={{ padding: 0 }}>
            <StyledListItemButton
              sx={{ backgroundColor: pathname === link && '#424242' }}
              onClick={() => navigate(`${link}`)}
            >
              <Icon />
              <StyledItem>{label}</StyledItem>
            </StyledListItemButton>
          </ListItem>
        ))}
      </List>
    </StyledDrawer>
  );
};

export default UIDrawer;
