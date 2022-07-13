import React from 'react';
import { Grid, Container } from '@mui/material';
import { UICategoryCard } from 'components';
import { StyledMainBox } from 'styles';

const Categories = () => {
  return (
    <StyledMainBox background='#424242'>
      <Container maxWidth='lg' sx={{ padding: '30px 0px 20px 0px' }}>
        <Grid container justifyContent='space-between'>
          <UICategoryCard src='anihkfxp' category='Programming & Development' />
          <UICategoryCard src='vixtkkbk' category='Photography' />
          <UICategoryCard src='anihkfxp' category='Designing' />
          <UICategoryCard src='rgyftmhc' category='Business' />
          <UICategoryCard src='uqpazftn' category='Marketing' />
          <UICategoryCard src='anihkfxp' category='Cloud' />
        </Grid>
      </Container>
    </StyledMainBox>
  );
};

export default Categories;
