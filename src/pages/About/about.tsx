import { Paper, Typography } from '@mui/material';
import React from 'react';

const AboutPage = () => {
  return (
    <>
      <Paper elevation={2} sx={{ height: 350, width: 700, padding: 5 }}>
        <Typography>
          Who am I? I am developer, love to share my experience about my journey trips around the world and developed my
          own blog to keep my memories.
        </Typography>
      </Paper>
    </>
  );
};

export default AboutPage;
