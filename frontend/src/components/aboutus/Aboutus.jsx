import React, { useState, useEffect } from "react";
import { Button } from 'antd';
import './aboutus.css';
import pic1 from '../../assets/pic1.jpg';
import pic2 from '../../assets/pic2.jpg';
import pic3 from '../../assets/pic3.jpg';
import pic8 from '../../assets/pic8.jpg';
import pic10 from '../../assets/pic10.jpg';
import pic11 from '../../assets/pic11.jpg';
import pic12 from '../../assets/pic12.jpg';
import pic13 from '../../assets/pic13.jpg';

const Aboutus = () => {
  const images = [pic1, pic2, pic3, pic8, pic10, pic11, pic12, pic13];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <section className="aboutus">
      <div className="about-us-container">
        <div className="about-us-heading">
          <h1>About Us</h1>
        </div>
        <div className="about-us-content">
          <div className="about-us-image-container">
            <img src={images[currentImageIndex]} alt="about" className="about-us-image" />
          </div>
          <p className="about-us-description">
            Welcome to CarCraft, your ultimate destination for connecting vehicle owners with trusted service providers. Our mission is to simplify and enhance the vehicle maintenance experience by offering a centralized platform that bridges the gap between service providers and vehicle owners. At CarCraft, we carefully vet and list only the most reputable service providers, ensuring high-quality maintenance and repair services. Our platform makes booking appointments effortless, allowing vehicle owners to schedule services, choose specific tasks, and receive estimates with just a few clicks. From routine maintenance like oil changes and tire rotations to major repairs and custom modifications, CarCraft provides a comprehensive range of services, making vehicle care convenient and reliable.
          </p>
        </div>
        <Button type="primary" className="read-more-dis-button" >Read More</Button>
      </div>
    </section>
  );
};

export default Aboutus;
