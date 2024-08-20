import React from 'react'
import VehicleOwner from '../../components/navbar/VehicleOwnerNavbar'
import ContactusHeader from '../../components/header/ContactusHeader'
import ContactUs from '../../components/contact/Contact'
import Footer from '../../components/footer/Footer'

const Contact = () => {
  return (
    <div>
        <VehicleOwner />
        <ContactusHeader />
        <ContactUs />
        <Footer />
    </div>
  )
}

export default Contact