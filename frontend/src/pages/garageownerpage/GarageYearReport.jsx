import React from 'react'
import GarageOwnerProfile from '../../components/header/GarageOwnerProfile'
import YearReport from '../../container/garageOwnerProfile/YearReport'
import Footer from '../../components/footer/Footer'

const GarageYearReport = () => {
    return (
        <div>
            <GarageOwnerProfile>
                < YearReport />
                
            </GarageOwnerProfile>
            < Footer />
        </div>
    )
}

export default GarageYearReport