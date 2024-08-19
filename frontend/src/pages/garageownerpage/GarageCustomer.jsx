import React from 'react'
import GarageOwnerProfile from '../../components/header/GarageOwnerProfile'
import Customer from '../../container/garageOwnerProfile/Customers'

const GarageCustomer = () => {
  return (
    <div>
      <GarageOwnerProfile>
        < Customer />
      </GarageOwnerProfile>
    </div>
  )
}

export default GarageCustomer