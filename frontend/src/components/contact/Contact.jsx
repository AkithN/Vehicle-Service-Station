import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContactUs from '../../assets/contact.jpg';
import './contact.css';

const Contact = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [message, setMessage] = useState('');
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const contactData = { user_name: userName, user_email: userEmail, message };

    try {
      const response = await fetch('http://localhost:5000/api/contactus/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });

      if (response.ok) {
        setSnackbarMessage('Message sent successfully!');
        setSnackbarSeverity('success');
        setUserName('');
        setUserEmail('');
        setMessage('');
      } else {
        setSnackbarMessage('Error sending message!');
        setSnackbarSeverity('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSnackbarMessage('Error sending message!');
      setSnackbarSeverity('error');
    } finally {
      setSnackbarVisible(true);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarVisible(false);
  };

  return (
    <section className="contact">
      <div className="contact-form-container">
        <div className="contact-image">
          <img 
            src={ContactUs} 
            alt="Contact Us" 
          />
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <h2 className="contact-title">Contact Us</h2>

          <label htmlFor="user_name" className="contact-label">Name</label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="contact-input"
            placeholder="Your Name"
            required
          />

          <label htmlFor="user_email" className="contact-label">Email</label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            className="contact-input"
            placeholder="Your Email"
            required
          />

          <label htmlFor="message" className="contact-label">Message</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="contact-textarea"
            placeholder="Your Message"
            rows="4"
            required
          />

          <button type="submit" className="contact-submit">
            Send
          </button>
        </form>
      </div>

      {snackbarVisible && (
        <div className={`snackbar ${snackbarSeverity}`}>
          <span>{snackbarMessage}</span>
          <button onClick={handleSnackbarClose}>&times;</button>
        </div>
      )}
    </section>
  );
};

export default Contact;
