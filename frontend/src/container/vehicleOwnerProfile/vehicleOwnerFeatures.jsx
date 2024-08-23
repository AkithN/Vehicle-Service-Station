import React from 'react';
import './vehicleOwnerFeatures.css';

const VehicalOwnerFeatures = () => {
  return (
    <div className="cloud-platform-container">
      <section className="intro-section">
        <h1 className="title">One Platform. All In The Cloud</h1>
        <p className="description">
          Manage every aspect of your garage or workshop business with one single platform, completely in the cloud.
        </p>
      </section>
      
      <section className="feature-section">
        <div className="feature-card">
          <h2>Comprehensive Solution</h2>
          <p>
            Everything you need to run your workshop from customer management, invoicing, and inventory control to analytics.
          </p>
        </div>
        <div className="feature-card">
          <h2>Always Available</h2>
          <p>
            Securely access your business anytime, anywhere, from any device with an internet connection.
          </p>
        </div>
        <div className="feature-card">
          <h2>Scalable & Flexible</h2>
          <p>
            Whether you have a small garage or a large chain of workshops, our platform scales with your business.
          </p>
        </div>
      </section>
    </div>
  );
};

export default VehicalOwnerFeatures;
