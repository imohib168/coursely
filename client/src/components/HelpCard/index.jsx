import React from 'react';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';

export const StyledGrid = styled(Grid)(({ theme }) => ({
  backgroundColor: '#ffffff',
  padding: '20px',
  borderRadius: '8px',

  a: {
    textDecoration: 'none',

    p: {
      '&:nth-of-type(1)': {
        color: theme.palette.black.main,
        fontSize: '30px',
        fontWeight: 500,
        letterSpacing: '.8px',
        marginBottom: '12px',
      },
      '&:nth-of-type(2)': {
        color: theme.palette.black.main,
        marginBottom: '12px',
      },
    },
  },
}));

const UIHelpCard = ({ title, link, icon, text }) => {
  return (
    <StyledGrid item xs={12} md={3.9}>
      <Link to={link}>
        <lord-icon
          src={`https://cdn.lordicon.com/${icon}.json`}
          trigger='loop'
          delay='2000'
          style={{ width: '50px', height: '50px' }}
        />
        <Typography>{title}</Typography>
        <Typography>{text}</Typography>
      </Link>
      
    </StyledGrid>
  );
};

export default UIHelpCard;
