import React from 'react'
import VehicleOwner from '../../components/navbar/VehicleOwnerNavbar'
import OffersHeader from '../../components/header/OffersHeader'
import AllOffers from '../../container/vehicleOwnerProfile/AllOffers'
import Footer from '../../components/footer/Footer'

const VOffers = () => {
    return (
        <div>
            <VehicleOwner />
            <OffersHeader />
            <AllOffers />
            <Footer />
        </div>
    )
}

export default VOffers