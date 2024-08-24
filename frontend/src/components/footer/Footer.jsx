import React from 'react';
import './footer.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-company">
            <h4>Need Help</h4>
            <ul>
              <li><a href="/">Road Assistance</a></li>
              <li><a href="/">For First Responders</a></li>
              <li><a href="/">Chat with Us</a></li>
              <li><a href="/">FAQs</a></li>
            </ul>
          </div>
          <div className="footer-help">
            <h4>Company </h4>
            <ul>
              <li><a href="/">Careers</a></li>
              <li><a href="/">Legal & Trademarks</a></li>
              <li><a href="/">Copyright</a></li>
              <li><a href="/">Terms of Use</a></li>
              <li><a href="/">Accessibility</a></li>
            </ul>
          </div>
          <div className="footer-shop">
            <h4>Resources</h4>
            <ul>
              <li><a href="/">Find a Dealer</a></li>
              <li><a href="/">Recalls</a></li>
              <li><a href="/">Maintenance Schedule</a></li>
              <li><a href="/">Owners Manual</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="/"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="/"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="/"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
