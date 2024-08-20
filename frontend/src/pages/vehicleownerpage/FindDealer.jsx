import React from 'react'
import VehicleOwner from '../../components/navbar/VehicleOwnerNavbar'
import FindDealer from '../../container/vehicleOwnerProfile/FindDealer'
import FindDealerHeader from '../../components/header/FindDealerHeader'
import Footer from '../../components/footer/Footer'

const VFindDealer = () => {
  return (
    <div>
        <VehicleOwner />
        <FindDealerHeader />
        <FindDealer />
        <Footer />
    </div>
  )
}

export default VFindDealer