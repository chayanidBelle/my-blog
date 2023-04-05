import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import './linear-progress-bar.css';

const LinearProgressBar = () => {
  const [textpercent, setTextpercent] = useState('');

  const clickNormalCss = () => {
    const element: any = document.getElementById('cssbar');
    let width = 0;
    const id = setInterval(() => {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++;
        setTextpercent(`${width}%`);
        element.style.width = width + '%';
        element.innerHTML = width * 1 + '%';
      }
    }, 500);
  };

  const clickReset = () => {
    const element: any = document.getElementById('cssbar');
    setTextpercent('');
    element.style.width = '0%';
    element.innerHTML = '0%';
  };

  return (
    <Box display='flex' flexDirection='column' width='100%'>
      <Box>
        <Typography sx={{ fontSize: '16px', fontWeight: 600 }}>Normal CSS</Typography>
        <div className='outer'>
          <div id='cssbar'>{textpercent}</div>
        </div>
        <Box display='flex' flexDirection='row' justifyContent='space-between' mt='10px'>
          <Button
            onClick={clickNormalCss}
            sx={{
              width: '100px',
              height: '38px',
              backgroundColor: '#b5c9c8',
              borderRadius: '5px',
              color: '#FFF',
              '&:hover': {
                backgroundColor: '#57838c',
                color: '#FFF',
              },
            }}
          >
            Try me
          </Button>
          <Button
            onClick={clickReset}
            sx={{
              width: '100px',
              height: '38px',
              backgroundColor: '#b5c9c8',
              borderRadius: '5px',
              color: '#FFF',
              '&:hover': {
                backgroundColor: '#57838c',
                color: '#FFF',
              },
            }}
          >
            Reset me
          </Button>
        </Box>
      </Box>

      <Box mt='20px'>
        <Typography sx={{ fontSize: '16px', fontWeight: 600 }}>Material Ui v5</Typography>
      </Box>
    </Box>
  );
};

export default LinearProgressBar;
