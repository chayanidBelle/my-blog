import { Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { redirect } from 'react-router-dom';

const NotFoundPage = () => {
  useEffect(() => {
    setTimeout(() => {
      return redirect('/');
    }, 500);
  }, []);

  return (
    <div style={{ display: 'flex', width: '100%', backgroundColor: '#152a38' }}>
      <Typography variant='h1' style={{ color: 'white', paddingTop: 100 }}>
        404 Not Found Page
      </Typography>
    </div>
  );
};

export default NotFoundPage;
