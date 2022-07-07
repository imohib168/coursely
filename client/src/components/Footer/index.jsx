import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Divider, Grid, Typography } from '@mui/material';
import {
  StyledFooter,
  StyledFooterImage,
  StyledFooterLogo,
  StyledLogoBox,
  StyledList,
  StyledContactEmail,
  StyledEmail,
  StyledCopyrightBox,
} from './ui';
import ASSETS from '../../utils/assets';
import { footerLinksMain, footerLinksBlogs } from './mockData';

const Footer = () => {
  return (
    <StyledFooter>
      <Container maxWidth='lg'>
        <Grid container>
          <Grid item xs={12}>
            <Grid container justifyContent='space-between'>
              <Grid item xs={12} md={4}>
                <StyledList>
                  {footerLinksMain.map(({ id, url, text }) => (
                    <li key={id}>
                      <Link to={url}>{text}</Link>
                    </li>
                  ))}
                </StyledList>
              </Grid>
              <Grid item xs={12} md={4}>
                <StyledList>
                  {footerLinksBlogs.map(({ id, url, text }) => (
                    <li key={id}>
                      <Link to={url}>{text}</Link>
                    </li>
                  ))}
                </StyledList>
              </Grid>
              <Grid item xs={12} md={4}>
                <StyledContactEmail>Contact Email</StyledContactEmail>
                <lord-icon
                  src='https://cdn.lordicon.com/tkgyrmwc.json'
                  trigger='loop'
                  colors='primary:#9e9e9e,secondary:#08a88a'
                  style={{ width: '25px', height: '25px' }}
                ></lord-icon>
                <StyledEmail href='mailto:contact@coursely.com'>
                  contact@coursely.com
                </StyledEmail>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Divider
              sx={{
                backgroundColor: '#9e9e9e',
                margin: '1.5rem 0px 2.5rem 0px',
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <StyledCopyrightBox>
              <StyledLogoBox>
                <StyledFooterImage
                  src={ASSETS.logo.img}
                  alt={ASSETS.logo.alt}
                />
                <StyledFooterLogo>Coursely</StyledFooterLogo>
              </StyledLogoBox>

              <Typography sx={{ color: '#9e9e9e' }}>
                &copy; {new Date().getFullYear()} Coursely Inc. All rights
                reserved
              </Typography>
            </StyledCopyrightBox>
          </Grid>
        </Grid>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
