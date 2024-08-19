import React from 'react'
import GarageOwnerProfile from '../../components/header/GarageOwnerProfile'
import Notification from '../../container/garageOwnerProfile/Notification'
import Footer from '../../components/footer/Footer'

const GarageNotification = () => {
  return (
    <div>
      <GarageOwnerProfile>
        < Notification />
        < Footer />
      </GarageOwnerProfile>
    </div>
  )
}

export default GarageNotification