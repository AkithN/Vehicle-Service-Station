import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import ServicesHeader from '../../components/header/ServicesHeader'
import VehicleOwnerFeature from '../../container/vehicleOwnerProfile/vehicleOwnerFeatures'

const VServices = () => {
  return (
    <div>
      <Navbar />
      <ServicesHeader />
      <VehicleOwnerFeature />
      <Footer />
    </div>
  )
}

export default VServices