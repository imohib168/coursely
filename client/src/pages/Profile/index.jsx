import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import { BasicProfileSection, MoreInformationSection } from 'sections';
import { StyledHeading } from './Update/ui';

const Profile = () => {
  return (
    <Box sx={{ margin: '3rem 0' }}>
      <Container maxWidth='lg'>
        <StyledHeading mainHeading mb='10px'>
          User Profile
        </StyledHeading>
        <Grid container display='flex' justifyContent='space-between'>
          <Grid item xs={12} md={4.9}>
            <BasicProfileSection />
          </Grid>

          <Grid item xs={12} md={6.9}>
            <MoreInformationSection />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Profile;
