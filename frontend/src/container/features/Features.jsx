import React, { useState } from 'react';
import { Button, Card } from 'antd';
import './features.css';

const Features = () => {
  const [showModal, setShowModal] = useState(false);

  const handleReadMoreClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section className="features-section">
      <div className="feature-row">
        <Card className="feature-card">
          <h2>Our Mission</h2>
          <img src="../../assets/mission.jpg" alt="Our Mission" />
          <p>At CarCraft, we aim to revolutionize the vehicle service industry by providing a seamless, user-friendly, and efficient platform that caters to the needs of both vehicle owners and service providers. We believe that finding and accessing reliable vehicle services should be easy, transparent, and hassle-free.</p>
          <Button type="primary" className="read-more-button" onClick={handleReadMoreClick}>Read More</Button>
        </Card>

        <Card className="feature-card">
          <h2>What We Offer</h2>
          <img src="../../assets/offer.jpg" alt="What We Offer" />
          <p className="modal-description"><b>Comprehensive Listings:</b> We offer a wide range of service providers, from large dealerships to small, local garages. Our comprehensive listings ensure that you can find the right service provider for your needs.</p>
            <p className="modal-description"><b>Enhanced Accessibility:</b> Our platform is designed to make it easy for you to discover, compare, and choose the best service provider based on your location, service requirements, and user reviews.</p>
            <p className="modal-description"><b>Improved Communication:</b> With integrated real-time messaging, inquiry forms, and appointment scheduling, we streamline communication between vehicle owners and service providers, ensuring timely and efficient interactions.</p>
            <p className="modal-description"><b>Secure Transactions:</b> We provide a secure payment gateway to facilitate smooth and safe financial transactions, giving you peace of mind.</p>
            <p className="modal-description"><b>User Reviews and Ratings:</b> Transparency is key. Our user reviews and ratings system helps you make informed decisions by seeing the experiences of other vehicle owners.</p>
            <Button type="primary" className="read-more-button" onClick={handleReadMoreClick}>Read More</Button>
        </Card>

        <Card className="feature-card">
          <h2>Our Vision</h2>
          <img src="../../assets/vision.jpg" alt="Our Vision" />
          <p>We envision a world where vehicle maintenance is no longer a chore but a seamless part of owning a vehicle. By leveraging cutting-edge technology and innovative solutions, we strive to set new standards in the vehicle service industry, promoting efficiency, transparency, and reliability.</p>          
          <Button type="primary" className="read-more-button" onClick={handleReadMoreClick}>Read More</Button>
        </Card>
      </div>

      <div className="feature-row">
        <Card className="feature-card">
          <h2>Our Team</h2>
          <img src="../../assets/team.jpg" alt="Our Team" />
          <p>Our team is a blend of passionate professionals with expertise in technology, automotive services, and customer experience. We are dedicated to providing the best possible service to our users, continually improving our platform based on feedback and the latest industry trends.</p>
          <Button type="primary" className="read-more-button" onClick={handleReadMoreClick}>Read More</Button>
        </Card>

        <Card className="feature-card">
          <h2>Join Us</h2>          
          <img src="../../assets/joinus.jpg" alt="Join Us" />
          <p>Whether you are a vehicle owner looking for reliable services or a service provider aiming to reach more customers, CarCraft is here to help. Join us today and experience the future of vehicle maintenance.</p>
          <Button type="primary" className="read-more-button" onClick={handleReadMoreClick}>Read More</Button>
        </Card>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={handleCloseModal}>&times;</span>
            <Card className="feature-card">
              <img src="../../assets/mission.jpg" alt="Our Mission" />
              <h2>Our Mission</h2>
              <p>At CarCraft, we aim to revolutionize the vehicle service industry by providing a seamless, user-friendly, and efficient platform that caters to the needs of both vehicle owners and service providers. We believe that finding and accessing reliable vehicle services should be easy, transparent, and hassle-free.</p>
            </Card>
          </div>
        </div>
      )}
    </section>
  );
};

export default Features;
