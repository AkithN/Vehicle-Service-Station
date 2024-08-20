import React from 'react'
import GarageOwnerProfile from '../../components/header/GarageOwnerProfile'
import MonthlyReport from '../../container/garageOwnerProfile/MonthlyReport'
import Footer from '../../components/footer/Footer'

const GarageMonthlyReport = () => {
    return (
        <div>
          <GarageOwnerProfile>
            < MonthlyReport />
          </GarageOwnerProfile>
          < Footer />
        </div>
      )
    }

export default GarageMonthlyReport