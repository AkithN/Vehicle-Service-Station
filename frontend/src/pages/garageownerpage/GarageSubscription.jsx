import React from 'react'
import GarageOwnerProfile from '../../components/header/GarageOwnerProfile'
import Subscription from '../../container/garageOwnerProfile/Subscription'
import Footer from '../../components/footer/Footer'

const GarageSubscription = () => {
  return (
    <div>
        <GarageOwnerProfile>
            <Subscription />
            < Footer />
        </GarageOwnerProfile>
    </div>
  )
}

export default GarageSubscription