import { Typography } from '@mui/material';
import React from 'react';

const NotFoundPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        backgroundColor: '#152a38',
        height: '100vh',
        // position: 'absolute',
        // top: '0px',
        // left: '0px',
        // right: '0px',
        // bottom: '0px',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant='h1' style={{ color: 'white', paddingTop: 100 }}>
        404 Not Found Page
      </Typography>
    </div>
  );
};

export default NotFoundPage;
