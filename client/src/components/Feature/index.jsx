import React from 'react';
import { Box, Typography } from '@mui/material';

const UIFeature = ({ icon, label }) => {
  return (
    <Box display='flex' alignItems='center'>
      <lord-icon
        src={`https://cdn.lordicon.com/${icon}.json`}
        trigger='loop'
        style={{ width: '40px', height: '40px' }}
      />

      <Typography
        sx={{ fontWeight: 600, fontSize: '20px', marginLeft: '10px' }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default UIFeature;
