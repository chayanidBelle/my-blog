import React from 'react';
import './navbar.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' style={{ backgroundColor: 'grey' }}>
        <Toolbar>
          <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}></IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            LOGO
          </Typography>
          <Button
            color='inherit'
            sx={{
              ':hover': { border: '1px solid white' },
              ':focus': { color: 'black', backgroundColor: 'white' },
            }}
          >
            Home
          </Button>
          <Button color='inherit'>Fact of me</Button>
          <Button color='inherit'>My Journey</Button>
          <Button color='inherit'>Contact</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
