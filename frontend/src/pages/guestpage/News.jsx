import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import NewsHeader from '../../components/header/NewsHeader'
import News from '../../container/News/GuestNews'

const VNews = () => {
  return (
    <div>
        <Navbar />
        <NewsHeader />
        <News />
        <Footer />
    </div>
  )
}

export default VNews