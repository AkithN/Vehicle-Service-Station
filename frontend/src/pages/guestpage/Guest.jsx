import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Register from '../registerpage/Register';
// import Header from '../../components/header/Header';

const Guest = () => {
  return (
    <div>
      <Navbar />
      {/* <Header /> */}
      <Register />
    </div>
  )
}

export default Guest