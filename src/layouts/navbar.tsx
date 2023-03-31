import React from 'react';
import './navbar.css';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <Typography style={{ color: 'white', fontWeight: 700, fontSize: '1.25rem' }}>Logo</Typography>
      <nav className='navigation'>
        {/* <a href='/'>Home</a>
        <a href='/about'>About</a>
        <a href='/articles'>Articles</a>
        <a href='/contact'>Contact</a> */}

        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/articles'>Articles</Link>
        <Link to='/contact'>Contact</Link>

        {/* <Button className='btn-msg'>Send MSG</Button> */}
      </nav>
    </header>
  );
};

export default Navbar;
