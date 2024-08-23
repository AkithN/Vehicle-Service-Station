import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card } from 'antd';
import './features.css';
import mission from '../../assets/mission.jpg';
import vision from '../../assets/vision.jpg';
import offer from '../../assets/offer.jpg';
import team from '../../assets/team.jpg';
import joinus from '../../assets/joinus.jpg';

const Features = () => {
  const navigate = useNavigate();

  const handleReadMoreClick = () => {
    navigate('/aboutus');
  };

  return (
    <section className="features-section">
      <div className="feature-row">
        <Card className="feature-card">
          <h2>Our Mission</h2>
          <div className="image-container">
            <img src={mission} alt="Our Mission" />
          </div>
          <p>At CarCraft, we aim to revolutionize the vehicle service industry by providing a seamless, user-friendly, and efficient platform that caters to the needs of both vehicle owners and service providers. We believe that finding and accessing reliable vehicle services should be easy, transparent, and hassle-free.</p>
          <Button type="primary" className="read-more-button" onClick={handleReadMoreClick}>Read More</Button>
        </Card>

        <Card className="feature-card">
          <h2>Our Vision</h2>
          <div className="image-container">
            <img src={vision} alt="Our Vision" />
          </div>
          <p>We envision a world where vehicle maintenance is no longer a chore but a seamless part of owning a vehicle. By leveraging cutting-edge technology and innovative solutions, we strive to set new standards in the vehicle service industry, promoting efficiency, transparency, and reliability.</p>
          <Button type="primary" className="read-more-button" onClick={handleReadMoreClick}>Read More</Button>
        </Card>

        <Card className="feature-card">
          <h2>What We Offer</h2>
          <div className="image-container">
            <img src={offer} alt="What We Offer" />
          </div>
          <p>We offer a wide range of service providers, from large dealerships to small, local garages. Our comprehensive listings ensure that you can find the right service provider for your needs.Our platform connects you with trusted professionals for vehicle services.</p>
          <Button type="primary" className="read-more-button" onClick={handleReadMoreClick}>Read More</Button>
        </Card>
      </div>

      <div className="feature-row">
        <Card className="feature-card">
          <h2>Our Team</h2>
          <div className="image-container">
            <img src={team} alt="Our Team" />
          </div>
          <p>Our team is a blend of passionate professionals with expertise in technology, automotive services, and customer experience. We are dedicated to providing the best possible service to our users, continually improving our platform based on feedback and the latest industry trends.</p>
          <Button type="primary" className="read-more-button" onClick={handleReadMoreClick}>Read More</Button>
        </Card>

        <Card className="feature-card">
          <h2>Join Us</h2>
          <div className="image-container">
            <img src={joinus} alt="Join Us" />
          </div>
          <p>Whether you are a vehicle owner looking for reliable services or a service provider aiming to reach more customers, CarCraft is here to help. Join us today and experience the future of vehicle maintenance.CarCraft connects vehicle owners with reliable services and helps service providers reach more customers.</p>
          <Button type="primary" className="read-more-button" onClick={handleReadMoreClick}>Read More</Button>
        </Card>
      </div>
    </section>
  );
};

export default Features;
