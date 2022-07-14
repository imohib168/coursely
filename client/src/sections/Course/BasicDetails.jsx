import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { StyledHeading } from 'styles';
import { UIButton } from 'components';
import {
  StyledDetailsBanner,
  StyledContainer,
  StyledSlogan,
  StyledOfferedBox,
  StyledDiagonalBox,
} from './ui';

const BasicDetails = ({ course }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleNavigate = () => {
    if (user?.roleId === 1) navigate('/ins/course/all');
    else navigate('/course/enroll');
  };

  return (
    <StyledDetailsBanner>
      <StyledContainer maxWidth='lg'>
        <StyledHeading mainHeading color='#eeeeee'>
          {course?.title}
        </StyledHeading>
        <StyledSlogan>{course?.slogan}</StyledSlogan>

        <StyledOfferedBox>
          <Typography>Course Offered By</Typography>&nbsp;
          <Box to='/' component={Link}>
            {course?.instructor}
          </Box>
        </StyledOfferedBox>

        <Typography sx={{ marginBottom: '2rem' }}>
          <strong>10</strong> students already Enrolled
        </Typography>

        <UIButton
          variant='contained'
          bgColor='#eeeeee'
          textColor='#424242'
          hoverTextColor='#eeeeee'
          onClick={handleNavigate}
        >
          {user?.roleId === 1 ? 'Go to Dashboard' : 'Enroll Now'}
        </UIButton>
      </StyledContainer>

      <StyledDiagonalBox />
    </StyledDetailsBanner>
  );
};

export default BasicDetails;
