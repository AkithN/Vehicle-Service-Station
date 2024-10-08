import React from 'react'
import AboutusHeader from '../../components/header/AboutusHeader'
import About from '../../container/about/About'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

const Aboutus = () => {
  return (
    <div>
      <Navbar />
      <AboutusHeader />
      <About />
      <Footer />
    </div>
  )
}

export default Aboutus