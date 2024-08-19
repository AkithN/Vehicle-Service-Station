import React from 'react'
import GarageOwnerProfile from '../../components/header/GarageOwnerProfile'
import Notification from '../../container/garageOwnerProfile/Notification'

const GarageNotification = () => {
  return (
    <div>
      <GarageOwnerProfile>
        < Notification />
      </GarageOwnerProfile>
    </div>
  )
}

export default GarageNotification