import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Grid } from '@mui/material';
import {
  StyledNavbar,
  StyledNavbarLogo,
  StyledIconBox,
  StyledSearchBox,
} from './ui';
import { UIButton, UISimpleField } from '../../components';
import { Search } from '@mui/icons-material';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <StyledNavbar component='nav'>
      <Container>
        <Grid container justifyContent='space-between' alignItems='center'>
          {/* Logo */}
          <Grid item xs={2}>
            <StyledNavbarLogo>Coursely</StyledNavbarLogo>
          </Grid>

          {/* Search */}
          <Grid item xs={8}>
            <StyledSearchBox>
              <UISimpleField
                type='text'
                placeholder='Search...'
                sx={{ padding: '8px 12px' }}
              />
              <StyledIconBox>
                <Search />
              </StyledIconBox>
            </StyledSearchBox>
          </Grid>

          {/* Login & Register BUtton */}
          <Grid item xs={2}>
            <UIButton
              variant='outlined'
              textColor='#424242'
              hoverTextColor='#424242'
              onClick={() => navigate('/login')}
              sx={{ marginRight: 2 }}
            >
              Login
            </UIButton>
            <UIButton
              variant='contained'
              bgColor='#424242'
              textColor='#eeeeee'
              hoverTextColor='#424242'
              onClick={() => navigate('/register')}
            >
              Register
            </UIButton>
          </Grid>
        </Grid>
      </Container>
    </StyledNavbar>
  );
};

export default Navbar;
