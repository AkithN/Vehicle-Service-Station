import React from 'react'
import GarageOwnerProfile from '../../components/header/GarageOwnerProfile'
import Customer from '../../container/garageOwnerProfile/Customers'
import Footer from '../../components/footer/Footer'

const GarageCustomer = () => {
  return (
    <div>
      <GarageOwnerProfile>
        < Customer />
      </GarageOwnerProfile>
      < Footer />
    </div>
  )
}

export default GarageCustomer