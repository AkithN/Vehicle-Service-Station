import React from 'react'
import VehicleOwner from '../../components/navbar/VehicleOwnerNavbar'
import Features from '../../container/vehicleOwnerProfile/vehicleOwnerFeatures'
import Footer from '../../components/footer/Footer'

const VFeatures = () => {
  return (
    <div>
        <VehicleOwner />
        <Features />
        <Footer />
    </div>
  )
}

export default VFeatures