import React, { useState, useEffect } from "react";
import { Button, Modal } from 'antd';
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
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleClose = () => {
    setIsModalVisible(false);
  };

  return (
    <section className="aboutus">
      <div className="about-us-container">
        <div className="about-us-heading">
          <h1>About Us</h1>
        </div>
        <div className="about-us-content">
          <div className="about-us-image-container">
            <img src={images[currentImageIndex]} alt="about" className="about-us-image" />
            <div className="dots-container">
              {images.map((_, index) => (
                <span key={index} className={`dot ${index === currentImageIndex ? 'active' : ''}`}></span>
              ))}
            </div>
          </div>
          <p className="about-us-description">
            Welcome to CarCraft, the ultimate hub for connecting vehicle owners with trusted and expert service providers. Our mission is to make vehicle maintenance and repairs as simple and stress-free as possible by providing a centralized platform that bridges the gap between you and the best service providers in the industry. At CarCraft, we are committed to quality and reliability, which is why we meticulously vet each service provider to ensure they meet our high standards. This means that every service listed on our platform is guaranteed to be of the highest quality....
          </p>
        </div>
        <Button type="primary" className="read-more-dis-button" onClick={showModal}>
          Read More
        </Button>
        <Modal
          title="About Us - More Details"
          visible={isModalVisible}
          onCancel={handleClose}
          footer={null}
        >
          <p>
            Welcome to CarCraft, the ultimate hub for connecting vehicle owners with trusted and expert service providers. Our mission is to make vehicle maintenance and repairs as simple and stress-free as possible by providing a centralized platform that bridges the gap between you and the best service providers in the industry. At CarCraft, we are committed to quality and reliability, which is why we meticulously vet each service provider to ensure they meet our high standards. This means that every service listed on our platform is guaranteed to be of the highest quality.
              <br /><br />
            CarCraft is designed with user convenience in mind. Our intuitive platform makes it easy for vehicle owners to book appointments, select specific services, and receive accurate estimates quickly and effortlessly. Whether you need routine maintenance like oil changes and tire rotations, major repairs, or custom modifications, CarCraft offers a comprehensive range of services to cater to all your vehicle care needs. Our goal is to provide a hassle-free experience that ensures your vehicle is always in top condition. With CarCraft, you can trust that your vehicle is in good hands, making vehicle maintenance and repairs more convenient and reliable than ever before.
          </p>
        </Modal>
      </div>
    </section>
  );
};

export default Aboutus;
