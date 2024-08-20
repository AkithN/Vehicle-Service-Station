import React from 'react'
import VehicleOwner from '../../components/navbar/VehicleOwnerNavbar'
import Features from '../../container/vehicleOwnerProfile/vehicleOwnerFeatures'
import Footer from '../../components/footer/Footer'
import FeaturesHeader from '../../components/header/FeaturesHeader'

const VFeatures = () => {
  return (
    <div>
        <VehicleOwner />
        <FeaturesHeader />
        <Features />
        <Footer />
    </div>
  )
}

export default VFeatures