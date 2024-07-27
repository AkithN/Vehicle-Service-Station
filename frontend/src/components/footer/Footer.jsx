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
            <h4>company</h4>
            <ul>
              <li><a href="/">about us</a></li>
              <li><a href="/">our services</a></li>
              <li><a href="/">privacy policy</a></li>
              <li><a href="/">affiliate program</a></li>
            </ul>
          </div>
          <div className="footer-help">
            <h4>get help</h4>
            <ul>
              <li><a href="/">FAQ</a></li>
              <li><a href="/">shipping</a></li>
              <li><a href="/">returns</a></li>
              <li><a href="/">order status</a></li>
              <li><a href="/">payment options</a></li>
            </ul>
          </div>
          <div className="footer-shop">
            <h4>online shop</h4>
            <ul>
              <li><a href="/">watch</a></li>
              <li><a href="/">bag</a></li>
              <li><a href="/">shoes</a></li>
              <li><a href="/">dress</a></li>
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
