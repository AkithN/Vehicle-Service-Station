import React from 'react'
import GarageOwnerProfile from '../../components/header/GarageOwnerProfile'
import Footer from '../../components/footer/Footer'
import ManageOffers from '../../pages/adminpages/offers/ManageOffers'

const GarageOffers = () => {
  return (
    <div>
        <GarageOwnerProfile>
          <ManageOffers />
        </GarageOwnerProfile>
        <Footer />
    </div>
  )
}

export default GarageOffers