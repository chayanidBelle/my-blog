import { Button, LinearProgress, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import './linear-progress-bar.css';

const LinearProgressBar = () => {
  const inStyles = useStyles();
  const [textpercent, setTextpercent] = useState('');
  const [progress, setProgress] = useState(0);

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
        element.innerHTML = width * 1 + '%'; //innerHTML is to get HTML content of element
      }
    }, 10);
  };

  const clickReset = () => {
    const element: any = document.getElementById('cssbar');
    setTextpercent('');
    element.style.width = '0%';
    element.innerHTML = '0%';
  };

  const clickMuiLinearBar = () => {
    const timer = setInterval(() => {
      // setProgress((oldProgress) => {
      //   if (oldProgress === 100) {
      //     clearInterval(timer);
      //     return 0;
      //   }
      //   const diff = Math.random() * 10;
      //   return Math.min(oldProgress + diff, 100);
      // });
      setProgress((prev) => {
        console.log(prev);
        if (prev === 100) {
          clearInterval(timer);
          return prev;
        }

        return prev + 10;
      });
    }, 100);
  };

  const clickResetMui = () => {
    setProgress(0);
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
        <LinearProgress
          variant='determinate'
          sx={{ height: '27px', borderRadius: '15px', backgroundColor: '#f1f1f1' }}
          value={progress}
          className={inStyles.linearBar}
        />

        <Box display='flex' flexDirection='row' justifyContent='space-between' mt='10px'>
          <Button
            onClick={clickMuiLinearBar}
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
            onClick={clickResetMui}
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
    </Box>
  );
};

export default LinearProgressBar;

const useStyles = makeStyles(() => ({
  linearBar: {
    '& .MuiLinearProgress-bar': { backgroundColor: '#a7d8c9' },
  },
}));
