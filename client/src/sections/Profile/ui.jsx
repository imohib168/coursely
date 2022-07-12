import { styled } from '@mui/system';
import { Box, Avatar, Typography, Divider } from '@mui/material';

export const StyledProfileBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'simple',
})(({ simple }) => ({
  background: '#ffffff',
  padding: '20px',
  position: 'relative',

  display: !simple && 'flex',
  flexDirection: !simple && 'column',
  justifyContent: !simple && 'center',
  alignItems: !simple && 'center',
}));

export const StyledAvatar = styled(Avatar)(() => ({
  height: '100px',
  width: '100px',
}));

export const StyledMainHeading = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'simple',
})(({ theme, simple }) => ({
  margin: !simple && '2rem 0 1.5rem 0',
  fontSize: '25px',
  fontWeight: 600,
  color: theme.palette.black.main,
}));

export const StyledUserStatus = styled(Box)(({ theme }) => ({
  margin: '0 0 1.5rem 0',
}));

export const StyledStatus = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
}));

export const StyledDivider = styled(Divider)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  margin: '0px 15px',
}));

export const StyledBio = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  color: theme.palette.primary.main,
  margin: '0 auto 20px auto',
  textAlign: 'justify',
}));

export const StyledBioHeading = styled(Typography)(({ theme }) => ({
  color: theme.palette.black.main,
  fontWeight: 600,
  alignSelf: 'start',
  fontSize: '18px',
}));

export const StyledAnchorLink = styled('a')(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: '16px',
  marginLeft: '10px',
  textDecoration: 'none',
}));

export const StyledFieldBox = styled(Box)(({ theme }) => ({
  margin: '12px 0 18px 10px',
  display: 'flex',
  alignItems: 'center',
}));
