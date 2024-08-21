import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const contactData = { user_name: userName, user_email: userEmail, message };

    try {
      const response = await fetch('http://localhost:5000/api/contactus', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });

      if (response.ok) {
        setUserName('');
        setUserEmail('');
        setMessage('');
        alert('Message sent successfully!');
      }
    } catch (error) {
      console.error('Error sending message:', error);
    };
  }

  return (
    <section className="contact">
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
    </section>
  );
};

export default Contact;
