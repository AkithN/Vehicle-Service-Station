import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import ServicesHeader from '../../components/header/ServicesHeader'
import Services from '../../container/services/Services'

const VServices = () => {
  return (
    <div>
      <Navbar />
      <ServicesHeader />
      <Services />
      <Footer />
    </div>
  )
}

export default VServices