import React from 'react';
import { UIHelpCard } from 'components';
import { Box, Container, Grid, Typography } from '@mui/material';
import { StyledHeading, StyledMainBox } from 'styles';
import { cardData } from './mockData';

const Help = () => {
  return (
    <StyledMainBox>
      <Container maxWidth='lg'>
        <Box>
          <StyledHeading mainHeading>You want help?</StyledHeading>

          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium velit suscipit quas aperiam aliquid dolorem quidem rerum
            vero quod iure similique, exercitationem totam consequatur eveniet
            harum fugit officia cupiditate odit itaque aut amet assumenda nulla
            doloremque. Dolores laboriosam maiores earum nulla! Maxime officia
            laudantium corrupti quibusdam cum autem nostrum voluptatum, nemo
            doloribus quam! Expedita veritatis recusandae consectetur eveniet
            provident? Dolorum suscipit facilis corrupti ad, voluptates quam.
            Explicabo iusto sed ullam atque itaque asperiores ipsam, enim, aut
            excepturi nesciunt, necessitatibus ab harum. Debitis enim itaque quo
            deserunt numquam vel eligendi nihil eaque dolorem iure officiis
            obcaecati sed reiciendis nemo labore, quam voluptates impedit
            voluptas aspernatur tempore est odio possimus quaerat. Consequatur
            laudantium animi exercitationem quisquam voluptas officiis officia
            sequi distinctio soluta earum, quo cumque eveniet cum. Debitis quis
            incidunt deleniti suscipit dicta maiores explicabo exercitationem in
            obcaecati harum accusantium, quae fugit labore eum commodi. Aliquid
            labore voluptatum enim! Nisi cumque obcaecati eius dolorem,
            temporibus rerum incidunt magni labore, quod eos aspernatur
            repellat. Libero mollitia numquam ipsa eligendi. Rem cum quaerat
            saepe reiciendis voluptatem aliquid tenetur atque perspiciatis fuga
            harum at, eius laudantium ratione fugit exercitationem quo
            asperiores, rerum ut eveniet. Reiciendis, numquam magnam. Quasi
            illum adipisci dignissimos beatae, error nisi tempora.
          </Typography>

          <Box sx={{ margin: '3rem 0 0 0' }}>
            <Grid container display='flex' justifyContent='space-between'>
              {cardData?.map((data) => (
                <UIHelpCard
                  key={data.id}
                  link={data.link}
                  icon={data.icon}
                  title={data.title}
                  text={data.text}
                />
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </StyledMainBox>
  );
};

export default Help;
