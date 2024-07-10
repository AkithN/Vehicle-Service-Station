import React, { useState, useEffect } from "react";
import './aboutus.css';
import pic1 from '../../assets/pic1.jpg';
import pic2 from '../../assets/pic2.jpg';
import pic3 from '../../assets/pic3.jpg';

const Aboutus = () => {
  const images = [pic1, pic2, pic3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  const handleReadMoreClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section className="aboutus">
      <div className="about-us-container">
        <h1>About Us</h1>
        <p className="about-us-description">
        Welcome to CarCraft, your ultimate destination for connecting vehicle owners with trusted service providers. Our mission is to simplify and enhance the vehicle maintenance experience by offering a centralized platform that bridges the gap between service providers and vehicle owners.
        </p>
        <div className="about-us-content">
          <img src={images[currentImageIndex]} alt="Coffee" className="about-us-image" />
          <div className="about-us-text">
            <h2>Our Mission</h2>
            <p>At CarCraft, we aim to revolutionize the vehicle service industry by providing a seamless, user-friendly, and efficient platform that caters to the needs of both vehicle owners and service providers. We believe that finding and accessing reliable vehicle services should be easy, transparent, and hassle-free.</p>
            <button className="read-more-button" onClick={handleReadMoreClick}>Read More</button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={handleCloseModal}>&times;</span>
            <h2>Our Mission</h2>
            <p>At CarCraft, we aim to revolutionize the vehicle service industry by providing a seamless, user-friendly, and efficient platform that caters to the needs of both vehicle owners and service providers. We believe that finding and accessing reliable vehicle services should be easy, transparent, and hassle-free.</p>
            <h2>What We Offer</h2>
            <p className="modal-description"><b>Comprehensive Listings:</b> We offer a wide range of service providers, from large dealerships to small, local garages. Our comprehensive listings ensure that you can find the right service provider for your needs.</p>
            <p className="modal-description"><b>Enhanced Accessibility:</b> Our platform is designed to make it easy for you to discover, compare, and choose the best service provider based on your location, service requirements, and user reviews.</p>
            <p className="modal-description"><b>Improved Communication:</b> With integrated real-time messaging, inquiry forms, and appointment scheduling, we streamline communication between vehicle owners and service providers, ensuring timely and efficient interactions.</p>
            <p className="modal-description"><b>Secure Transactions:</b> We provide a secure payment gateway to facilitate smooth and safe financial transactions, giving you peace of mind.</p>
            <p className="modal-description"><b>User Reviews and Ratings:</b> Transparency is key. Our user reviews and ratings system helps you make informed decisions by seeing the experiences of other vehicle owners.</p>
            <h2>Our Vision</h2>
            <p>We envision a world where vehicle maintenance is no longer a chore but a seamless part of owning a vehicle. By leveraging cutting-edge technology and innovative solutions, we strive to set new standards in the vehicle service industry, promoting efficiency, transparency, and reliability.</p>
            <h2>Our Team</h2>
            <p>Our team is a blend of passionate professionals with expertise in technology, automotive services, and customer experience. We are dedicated to providing the best possible service to our users, continually improving our platform based on feedback and the latest industry trends.</p>
            <h2>Join Us</h2>
            <p>Whether you are a vehicle owner looking for reliable services or a service provider aiming to reach more customers, CarCraft is here to help. Join us today and experience the future of vehicle maintenance.</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Aboutus;
