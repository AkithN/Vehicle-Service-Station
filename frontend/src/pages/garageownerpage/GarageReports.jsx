import React from 'react'
import GarageOwnerProfile from '../../components/header/GarageOwnerProfile'
import Reports from '../../container/garageOwnerProfile/Reports'
import Footer from '../../components/footer/Footer'

const GarageReports = () => {
    return (
        <div>
            <GarageOwnerProfile>
                <Reports />
                
            </GarageOwnerProfile>
            < Footer />
        </div>
      )
}

export default GarageReports