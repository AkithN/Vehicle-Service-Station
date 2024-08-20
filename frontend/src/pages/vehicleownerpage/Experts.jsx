import React from 'react'
import VehicleOwner from '../../components/navbar/VehicleOwnerNavbar'
import ExpertsHeader from '../../components/header/ExpertsHeader'
import Experts from '../../container/vehicleOwnerProfile/Experts'
import Footer from '../../components/footer/Footer'

const VExperts = () => {
  return (
    <div>
        <VehicleOwner />
        <ExpertsHeader />
        <Experts />
        < Footer />
    </div>
  )
}

export default VExperts