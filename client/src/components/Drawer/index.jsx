import React from 'react';
import { Toolbar, List, ListItem } from '@mui/material';
import { drawerMenuItems } from './mock-data';
import {
  StyledDrawer,
  StyledLogo,
  StyledListItemButton,
  StyledItem,
} from './ui';

const UIDrawer = () => {
  return (
    <StyledDrawer variant='permanent' anchor='left'>
      <Toolbar>
        <StyledLogo>Coursely</StyledLogo>
      </Toolbar>
      <List sx={{ marginTop: '25px' }}>
        {drawerMenuItems.map(({ id, label, Icon }) => (
          <ListItem key={id} sx={{ padding: 0 }}>
            <StyledListItemButton>
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
