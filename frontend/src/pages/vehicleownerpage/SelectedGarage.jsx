import React from 'react'
import VehicleOwner from '../../components/navbar/VehicleOwnerNavbar'
import Footer from '../../components/footer/Footer'
import SelectedGarage from '../../container/vehicleOwnerProfile/SelectedGarage'
import SelectedGarageHeader from '../../components/header/SelectedGarageHeader'
import InquiryForm from '../../container/vehicleOwnerProfile/InquiryForm'

const vSelectedGarage = () => {
    return (
        <div>
            <VehicleOwner />
            <SelectedGarageHeader />
            <SelectedGarage />
            <InquiryForm />
            <Footer />
        </div>
    )
}

export default vSelectedGarage