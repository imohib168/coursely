import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { StyledHeading } from 'styles';
import { UIButton, UIChip } from 'components';
import { useNavigate } from 'react-router-dom';

const UICourseCard = ({
  id,
  title,
  slogan,
  category,
  price,
  isCoursesPage,
}) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ background: '#fff', padding: '20px', mb: isCoursesPage && 2 }}>
      <Grid container justifyContent='space-between' alignItems='center'>
        <Grid item xs={12} md={2}>
          <lord-icon
            src='https://cdn.lordicon.com/dxoycpzg.json'
            trigger='morph'
            colors='primary:#9e9e9e,secondary:#424242,tertiary:#202020,quaternary:#ebe6ef,quinary:#f9c9c0'
            state='morph'
            style={{ width: '150px', height: '150px' }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <StyledHeading mb='8px'>{title}</StyledHeading>
          <Typography sx={{ mb: 1.5 }}>{slogan}</Typography>
          {isCoursesPage ? (
            <Typography sx={{ mb: 1.5, fontSize: '18px', fontWeight: 700 }}>
              <UIChip label={category} sx={{ mr: 1 }} /> Rs. {price}
            </Typography>
          ) : (
            <UIChip label={category} />
          )}
        </Grid>

        <Grid item xs={12} md={2}>
          <UIButton
            variant='contained'
            bgColor='#202020'
            textColor='#eeeeee'
            hoverTextColor='#202020'
            onClick={() => navigate(`/course/detail/${id}`)}
          >
            See Course
          </UIButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UICourseCard;
