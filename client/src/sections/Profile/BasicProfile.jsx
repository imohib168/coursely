import React from 'react';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { StyledMainBox } from 'styles';
import {
  StyledProfileBox,
  StyledAvatar,
  StyledMainHeading,
  StyledUserStatus,
  StyledDivider,
  StyledStatus,
  StyledBio,
  StyledBioHeading,
} from './ui';
import ASSETS from 'utils/assets';

const BasicProfile = () => {
  const { user } = useSelector((state) => state.auth);

  const userRole = (role = 'STUDENT') => {
    const firstLetter = role.charAt(0).toUpperCase();
    const restWord = role.slice(1).toLocaleLowerCase();
    return firstLetter + restWord;
  };

  return (
    <StyledMainBox>
      <StyledProfileBox>
        <StyledAvatar src={ASSETS.avatar.img} alt={ASSETS.avatar.alt} />

        <StyledMainHeading>
          {user?.firstName} {user?.lastName}
        </StyledMainHeading>

        <StyledUserStatus display='flex'>
          <StyledStatus>{userRole(user?.role)}</StyledStatus>
          {user?.city && (
            <>
              <StyledDivider orientation='vertical' flexItem />
              <StyledStatus>{user?.city || 'City'}</StyledStatus>
            </>
          )}
        </StyledUserStatus>

        {user.bio && (
          <Box sx={{ width: '90%' }}>
            <StyledBioHeading>Bio</StyledBioHeading>
            <StyledBio>{user?.bio}</StyledBio>
          </Box>
        )}
      </StyledProfileBox>
    </StyledMainBox>
  );
};

export default BasicProfile;
