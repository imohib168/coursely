import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

export const StyledFooter = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.black.main,
  padding: '22px 0px',
}));

export const StyledFooterImage = styled('img')(({ theme }) => ({
  width: 'auto',
  height: '40px',
}));

export const StyledFooterLogo = styled(Typography)(({ theme }) => ({
  fontSize: '22px',
  fontWeight: 500,
  color: theme.palette.secondary.main,
}));

export const StyledLogoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  img: { marginRight: '6px' },
}));

export const StyledCopyrightBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingBottom: '0.8rem',
}));

export const StyledList = styled('ul')(({ theme }) => ({
  margin: 0,
  padding: 0,

  li: {
    listStyleType: 'none',
    margin: '10px 0px',

    a: {
      transition: 'all 0.3s ease-in-out',
      color: theme.palette.secondary.main,

      '&:hover': {
        color: theme.palette.white.main,
      },
    },
  },
}));

export const StyledContactEmail = styled(Typography)(({ theme }) => ({
  fontSize: '20px',
  color: theme.palette.white.main,
  fontWeight: 600,
  marginBottom: '10px',
}));

export const StyledEmail = styled('a')(({ theme }) => ({
  fontSize: '14px',
  color: theme.palette.secondary.main,
  textDecoration: 'none',
}));
