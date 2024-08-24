import React from 'react'
import banner from '../../assets/banner.mp4'
import './header.css'

const Header = () => {
  return (
    <section className='header-container'>
      <video src={ banner } muted autoPlay loop type="banner/mp4"></video>
      <div className="home">
        {/* <h1>Connecting Vehicle Owners with Trusted Service Providers</h1> */}
        <h3>Welcome to CarCraft, your ultimate destination for connecting vehicle owners with trusted service providers.
          <br/> Our mission is to simplify and enhance the vehicle maintenance experience by offering a centralized <br /> platform that bridges the gap between service providers and vehicle owners.</h3>
      </div>
    </section>
  )
}

export default Header