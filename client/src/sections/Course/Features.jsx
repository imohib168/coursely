import React from 'react';
import { Typography, Box } from '@mui/material';
import { StyledHeading, StyledMainBox } from 'styles';
import { UIButton, UIFeature } from 'components';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Features = ({ course }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleNavigate = () => {
    if (user?.roleId === 2) navigate('/course/enroll');
  };

  return (
    <StyledMainBox>
      <StyledHeading>Features</StyledHeading>
      <Box sx={{ mb: 3, p: 1, background: '#fff' }}>
        <Typography>{course?.features}</Typography>
      </Box>

      <Box sx={{ mb: 3, p: 1, background: '#fff' }}>
        <UIFeature icon='gqzfzudq' label='Watch Online' />
      </Box>

      <Box sx={{ mb: 3, p: 1, background: '#fff' }}>
        <UIFeature icon='nocovwne' label={course?.language} />
      </Box>
      <Box sx={{ mb: 3, p: 1, background: '#fff' }}>
        <UIFeature icon='kbtmbyzy' label={`Approx ${course?.duration} hours`} />
      </Box>

      {user?.roleId === 2 && (
        <UIButton
          variant='contained'
          bgColor='#424242'
          textColor='#eeeeee'
          hoverTextColor='#424242'
          sx={{ width: '120px' }}
          onClick={handleNavigate}
        >
          Enroll
        </UIButton>
      )}
    </StyledMainBox>
  );
};

export default Features;
