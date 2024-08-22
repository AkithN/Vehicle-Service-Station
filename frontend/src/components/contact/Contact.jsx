import React, { useState } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import PhoneIphoneSharpIcon from '@mui/icons-material/PhoneIphoneSharp';
import DraftsSharpIcon from '@mui/icons-material/DraftsSharp';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import EventAvailableSharpIcon from '@mui/icons-material/EventAvailableSharp';
import './contact.css';

const Contact = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [message, setMessage] = useState('');

  const contactDetails = [
    {
      icon: <PhoneIphoneSharpIcon color="primary" sx={{ fontSize: 50 }} />,
      label: 'Phone No.',
      value: '1-232-131-1400',
    },
    {
      icon: <LocationOnSharpIcon color="primary" sx={{ fontSize: 50 }} />,
      label: 'Address',
      value: '2830 Patrick Street, Victoria TX, United States',
    },
    {
      icon: <DraftsSharpIcon color="primary" sx={{ fontSize: 50 }} />,
      label: 'E-mail',
      value: 'mail@company.com',
    },
    {
      icon: <EventAvailableSharpIcon color="primary" sx={{ fontSize: 50 }} />,
      label: 'Opening Hours',
      value: 'Monday - Friday (9:00 AM to 5:00 PM)',
    },
  ];

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
    <>
      <Box sx={{ mt: 4 , backgroundColor: '#001529'}}>
        <Grid container spacing={4} justifyContent="center">
          {contactDetails.map((detail, index) => (
            <Grid item xs={12} md={2} key={index} textAlign="center">
              {detail.icon}
              <Typography variant="h6" sx={{ mt: 1 ,color: '#fff'}}>
                {detail.label}
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 ,mb: 2,color: '#fff' }}>{detail.value}</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>

      <section className="contact">
        <form onSubmit={handleSubmit} className="contact-form">

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
    </>
  );
};

export default Contact;
