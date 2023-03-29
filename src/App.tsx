import React from 'react';
import './App.css';
import Navbar from './layouts/navbar';
import AboutPage from './pages/About/about';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className='background'>{/* <Typography style={{ paddingTop: '70px' }}>Hello world</Typography> */}</div>
      <div className='about-background'>
        <AboutPage />
      </div>
    </React.Fragment>
  );
}

export default App;
