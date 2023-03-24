import React from 'react';
import './navbar.css';
import Typography from '@mui/material/Typography';

const Navbar = () => {
  return (
    <header>
      <Typography style={{ color: 'white', fontWeight: 700, fontSize: '1.25rem' }}>Logo</Typography>
      <nav className='navigation'>
        <a href='/'>Home</a>
        <a href='/'>About</a>
        <a href='/'>Skills</a>
        <a href='/'>Contact</a>

        {/* <Button className='btn-msg'>Send MSG</Button> */}
      </nav>
    </header>
  );
};

export default Navbar;
