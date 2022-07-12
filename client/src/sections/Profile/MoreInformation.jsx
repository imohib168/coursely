import React from 'react';
import { useSelector } from 'react-redux';
import { StyledEditLink, StyledMainBox } from 'styles';
import {
  StyledProfileBox,
  StyledMainHeading,
  StyledBioHeading,
  StyledAnchorLink,
  StyledFieldBox,
} from './ui';

const MoreInformation = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <StyledMainBox>
      <StyledProfileBox simple>
        <StyledMainHeading simple>More Information</StyledMainHeading>

        <StyledFieldBox>
          <StyledBioHeading>Email</StyledBioHeading>
          <StyledAnchorLink href={`mailto:${user?.email}`}>
            {user?.email}
          </StyledAnchorLink>
        </StyledFieldBox>

        <StyledFieldBox>
          <StyledBioHeading>Username</StyledBioHeading>
          <StyledAnchorLink>{user?.username}</StyledAnchorLink>
        </StyledFieldBox>

        <StyledFieldBox>
          <StyledBioHeading>Phone</StyledBioHeading>
          <StyledAnchorLink href={`tel:${user?.phone}`}>
            +92 {user?.phone}
          </StyledAnchorLink>
        </StyledFieldBox>

        <StyledFieldBox>
          <StyledBioHeading>Country</StyledBioHeading>
          <StyledAnchorLink>{user?.country || '-'}</StyledAnchorLink>
        </StyledFieldBox>

        <StyledMainHeading simple>Social Links</StyledMainHeading>

        <StyledFieldBox>
          <StyledBioHeading>Github</StyledBioHeading>
          <StyledAnchorLink href={user?.githubURL} target='_blank'>
            {user?.githubURL || '-'}
          </StyledAnchorLink>
        </StyledFieldBox>

        <StyledFieldBox>
          <StyledBioHeading>Linkedin</StyledBioHeading>
          <StyledAnchorLink href={user?.linkedinURL} target='_blank'>
            {user?.linkedinURL || '-'}
          </StyledAnchorLink>
        </StyledFieldBox>

        <StyledFieldBox>
          <StyledBioHeading>Facebook</StyledBioHeading>
          <StyledAnchorLink href={user?.facebookURL} target='_blank'>
            {user?.facebookURL || '-'}
          </StyledAnchorLink>
        </StyledFieldBox>

        <StyledEditLink to='/profile/update'>Edit</StyledEditLink>
      </StyledProfileBox>
    </StyledMainBox>
  );
};

export default MoreInformation;
