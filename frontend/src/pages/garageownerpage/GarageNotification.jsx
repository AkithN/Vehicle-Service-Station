import React from 'react'
import GarageOwnerProfile from '../../components/header/GarageOwnerProfile'
import Notification from '../../container/garageOwnerProfile/Notification'
import Footer from '../../components/footer/Footer'

const GarageNotification = () => {
  return (
    <div>
      <GarageOwnerProfile>
        < Notification />
      </GarageOwnerProfile>
      < Footer />
    </div>
  )
}

export default GarageNotification