import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Aboutus from '../../components/aboutus/Aboutus';
import AboutBox from '../../container/aboutBox/AboutBox';
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';
import Services from '../../container/services/Services';

const Guest = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Aboutus />
      <AboutBox />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default Guest