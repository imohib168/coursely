import { Search } from '@mui/icons-material';
import { Container, Grid } from '@mui/material';
import React from 'react';
import { UIButton, UISimpleField } from '../../components';
import { StyledMainBox, StyledSearchBox, StyledIconBox } from '../../styles';

const SearchBar = () => {
  return (
    <StyledMainBox>
      <Container>
        <Grid container justifyContent='space-around'>
          <Grid item xs={12} md={8.9}>
            <StyledSearchBox>
              <UISimpleField
                type='text'
                placeholder='Search by title...'
                sx={{ padding: '8px 12px' }}
              />
              <StyledIconBox>
                <Search />
              </StyledIconBox>
            </StyledSearchBox>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            display='flex'
            justifyContent='space-around'
          >
            <UIButton
              variant='outlined'
              textColor='#424242'
              hoverTextColor='#424242'
            >
              Write a Blog
            </UIButton>

            <UIButton
              variant='contained'
              bgColor='#424242'
              textColor='#eeeeee'
              hoverTextColor='#424242'
              sx={{}}
            >
              Go to profile
            </UIButton>
          </Grid>
        </Grid>
      </Container>
    </StyledMainBox>
  );
};

export default SearchBar;
