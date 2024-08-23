import React from 'react'
import GarageOwnerProfile from '../../components/header/GarageOwnerProfile'
import Packages from '../../container/packages/GuestPackages'
import Footer from '../../components/footer/Footer'

const GarageSubscription = () => {
  return (
    <div>
        <GarageOwnerProfile>
            <Packages />
            
        </GarageOwnerProfile>
        < Footer />
    </div>
  )
}

export default GarageSubscription