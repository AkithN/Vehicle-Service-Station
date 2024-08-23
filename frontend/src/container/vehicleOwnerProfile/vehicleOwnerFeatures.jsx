import React from 'react';
import { CheckCircleOutlined } from '@ant-design/icons';
import './vehicleOwnerFeatures.css';
import image1 from '../../assets/picf1.jpeg';
import image2 from '../../assets/picf2.jpeg';
import image3 from '../../assets/picf3.jpeg';

const VehicalOwnerFeatures = () => {
  return (
    <section className="cloud-platform-container">
      <h1 className="feture-title">Organize Your Business Operations</h1>
      <section className="intro-section">
        <img src={image1} alt="image1" />
        <div className="first-description">
          <h3><CheckCircleOutlined /> Digital Inspections, Job cards, invoices and CRM</h3>
          <p>Manage every aspect of your garage or workshop business with one single platform, completely in the cloud.</p>

          <h3><CheckCircleOutlined /> Workflow Management</h3>
          <p>Integrated tailored workflow to track service progress, history and overall shop-floor analytics.</p>

          <h3><CheckCircleOutlined /> Calendar and Scheduling</h3>
          <p>Never miss appointments and planned work with in-built appointment scheduler. Track daily, weekly or monthly appointments with ease.</p>

          <h3><CheckCircleOutlined /> Track & Manage Technicians</h3>
          <p>Technician job allocation, time clocking and efficiency tracking with a single tap. Generate work-log reports for any job card.</p>
        </div>
      </section>

      <h1 className="feture-title">Communicate Better With Customers</h1>
      <section className="intro-section">
        <img src={image2} alt="image2" />
        <div className="first-description">
          <h3><CheckCircleOutlined /> Integrated communication tools</h3>
          <p>Send quotes, invoices, inspections, service progress and reminders for payment via SMS, email or WhatsApp.</p>

          <h3><CheckCircleOutlined /> Hassle-free service updates via WhatsApp</h3>
          <p>Integrated tailored workflow to track service progress, history and overall shop-floor analytics.</p>

          <h3><CheckCircleOutlined /> Uber-style service feedback linked with GoogleMyBusiness</h3>
          <p>Remind your customers regarding their upcoming service and know if they have cancelled or confirmed the appointment.</p>

          <h3><CheckCircleOutlined /> Automated Follow-ups and Reminders</h3>
          <p>Remind your customers regarding their upcoming service and know if they have cancelled or confirmed the appointment.</p>
        </div>
      </section>

      <h1 className="feture-title">Analytics And Business Intelligence</h1>
      <section className="intro-section">
        <img src={image3} alt="image3" />
        <div className="first-description">
          <h3><CheckCircleOutlined /> Comprehensive Reporting & GST Compliance</h3>
          <p>Get detailed reports on profits, day's progress, sales, inventory, technicians, and more. GST handling for invoice & expense.</p>

          <h3><CheckCircleOutlined /> Business Management Dashboard</h3>
          <p>Track month-on-month revenue, income, and expenses with business efficiency tracking. Quick overview to track vehicle-in and vehicle-out.</p>

          <h3><CheckCircleOutlined /> Remote Business Monitoring</h3>
          <p>Track the entire operations through real-time dashboard on your smartphone along with comparison of multiple outlets.</p>

          <h3><CheckCircleOutlined /> Multi-Outlet Management & Reporting</h3>
          <p>Link all outlets together and perform inter-branch stock transfer with ease. Consolidated reports, performance tracking, and much more.</p>
        </div>
      </section>
    </section>
  );
};

export default VehicalOwnerFeatures;
