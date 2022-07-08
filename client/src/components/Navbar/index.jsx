import React from 'react';
import { Container, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { StyledNavbar, StyledNavbarLogo } from './ui';
import { StyledSearchBox, StyledIconBox } from '../../styles';
import { UIButton, UISimpleField } from '../../components';
import { Search } from '@mui/icons-material';
import { logout } from '../../store/slices/authSlice';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const isBlogPage = pathname.includes('blogs');
  const { user } = useSelector((state) => state.auth);

  const handleUserLogout = () => dispatch(logout());

  return (
    <StyledNavbar component='nav'>
      <Container maxWidth='lg'>
        <Grid container justifyContent='space-between' alignItems='center'>
          {/* Logo */}
          <Grid
            item
            xs={2}
            sx={{
              display: isBlogPage && 'flex',
              alignItems: isBlogPage && 'center',
            }}
          >
            <StyledNavbarLogo>
              <Link to='/'>Coursely</Link>
            </StyledNavbarLogo>
            {isBlogPage && (
              <Link
                to='/blogs'
                component='span'
                style={{
                  color: '#424242',
                  marginLeft: '5px',
                  fontSize: '14px',
                  textDecoration: 'none',
                }}
              >
                Blogs
              </Link>
            )}
          </Grid>

          {/* Search */}
          {!isBlogPage ? (
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
          ) : null}

          {/* Login & Register BUtton */}
          <Grid item xs={2}>
            {user ? (
              <>
                <UIButton
                  variant='outlined'
                  textColor='#424242'
                  hoverTextColor='#424242'
                  onClick={handleUserLogout}
                  sx={{ marginRight: 2 }}
                >
                  Logout
                </UIButton>
                <UIButton
                  variant='contained'
                  bgColor='#424242'
                  textColor='#eeeeee'
                  hoverTextColor='#424242'
                  onClick={() => navigate('/profile')}
                >
                  Profile
                </UIButton>
              </>
            ) : (
              <>
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
              </>
            )}
          </Grid>
        </Grid>
      </Container>
    </StyledNavbar>
  );
};

export default Navbar;
