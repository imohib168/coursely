import React from 'react';
import moment from 'moment';
import { HashLink } from 'react-router-hash-link';
import { Favorite, FavoriteBorder, ForumOutlined } from '@mui/icons-material';
import { Avatar, Box, Checkbox, Grid, Typography } from '@mui/material';
import ASSETS from '../../utils/assets';
import {
  StyledBlogCard,
  StyledBlogDetailText,
  StyledBottomGrid,
  StyledLink,
  StyledBlogTitle,
} from './ui';
import UIChip from '../Chip';

const UIBlogCard = ({
  id,
  title,
  username,
  time,
  blogText,
  isDetailPage,
  category,
}) => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const getBlogText = (text) => {
    if (text.length > 400 && !isDetailPage)
      return (
        <>
          {text.slice(0, 400)}{' '}
          <StyledLink to={`/blogs/${id}`}>Read more...</StyledLink>
        </>
      );

    return text;
  };

  return (
    <StyledBlogCard>
      <Grid container>
        <Grid
          item
          sx={{ marginBottom: 2, width: '100%' }}
          display='flex'
          justifyContent='space-between'
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar src={ASSETS.avatar.img} alt={ASSETS.avatar.alt} />
            <StyledBlogDetailText>
              <Typography>{username}</Typography>
              <Typography>{moment(time).startOf('hour').fromNow()}</Typography>
            </StyledBlogDetailText>
          </Box>

          <Box>
            <UIChip
              label={category}
              sx={{ backgroundColor: '#eeeeee', color: '#424242' }}
            />
          </Box>
        </Grid>

        <Grid item sx={{ marginBottom: 2 }}>
          <Typography sx={{ marginBottom: 2 }}>
            <StyledBlogTitle to={`/blogs/${id}`}>{title}</StyledBlogTitle>
          </Typography>
          <Typography>{getBlogText(blogText)}</Typography>
        </Grid>
        <StyledBottomGrid item>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Checkbox
              {...label}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              disableRipple
            />
            {!isDetailPage && (
              <HashLink to={`/blogs/${id}#comment-section`}>
                <ForumOutlined sx={{ marginTop: 1, color: '#9e9e9e' }} />
              </HashLink>
            )}
          </Box>
        </StyledBottomGrid>
      </Grid>
    </StyledBlogCard>
  );
};

export default UIBlogCard;
