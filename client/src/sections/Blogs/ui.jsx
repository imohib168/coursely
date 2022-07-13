import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

export const StyledCategoryHeading = styled(Typography)({
  fontSize: '20px',
  fontWeight: 600,
  marginBottom: '10px',
});

export const StyledCommentSectionBox = styled(Box)({
  marginBottom: '3rem',
  backgroundColor: '#ffffff',
  width: '90%',
  padding: '1.3rem',
});

export const StyledOtherBlog = styled(Box)({
  backgroundColor: '#eeeeee',
  padding: '10px',
  margin: '15px 0px',
  height: '60px',
  color: '#424242',

  p: { fontWeight: 500 },
});

export const commentFieldStyles = {
  margin: '1rem 0rem',
  padding: '12px',
  width: '100%',
};

export const StyledCategory = styled('span')({
  fontSize: '13px',
});
