import React from 'react'
import banner from '../../assets/banner.mp4'

const Header = () => {
  return (
    <section className='header-container'>
      <video src={ banner } muted autoPlay loop type="banner/mp4"></video>
    </section>
  )
}

export default Header