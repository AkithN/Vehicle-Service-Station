import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import ContactusHeader from '../../components/header/ContactusHeader'
import Contact from '../../components/contact/Contact'

const Contactus = () => {
    return (
        <div>
            <Navbar />
            <ContactusHeader />
            <Contact />
            <Footer />
        </div>
    )
}

export default Contactus