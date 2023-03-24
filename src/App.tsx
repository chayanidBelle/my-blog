import { Typography, Box } from '@mui/material';
import React from 'react';
import './App.css';
import Navbar from './layouts/navbar';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className='background'>
        <Typography style={{ paddingTop: '70px' }}>Hello world</Typography>
      </div>
    </React.Fragment>
  );
}

export default App;
