import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './layouts/navbar';
import MainComponents from './pages/Articles/my-component/main';
import NotFoundPage from './pages/Notfound/404-not-found';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        {/* <Route path='*' element={<NotFoundPage />} /> */}
        <Route path='/' element={<div className='background'></div>} />
        <Route path='/articles' element={<MainComponents />} />
        <Route path='/404' element={<NotFoundPage />} />
        <Route path='*' element={<Navigate to='/404' replace />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
