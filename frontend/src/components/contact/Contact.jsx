import React, { useRef } from "react";
import './contact.css';
import ContactUs from '../../assets/contact.jpg';
import { Container, Box, Grid, Typography, TextField, Button } from "@mui/material";
import axios from 'axios';

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const data = {
      user_name: formData.get('name'),
      user_email: formData.get('email'),
      message: formData.get('message'),
    };

    axios.post('http://localhost:5000/api/contact', data)
      .then(response => {
        console.log("Data saved to database:", response.data);
        
        formRef.current.reset();
      })
      .catch(error => {
        console.error('Error saving data to database:', error);
        alert("There was an error submitting the form. Please try again later.");
      });
  };

  return (
    <section className="contact">
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6} className="contact-image">
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <img src={ContactUs} alt="Contact Us" style={{ width: '100%', borderRadius: '8px', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)' }} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <Typography variant="h4" component="h2" gutterBottom>
                Contact Us
              </Typography>
              <TextField 
                label="Name" 
                name="name" 
                fullWidth 
                margin="normal" 
                variant="outlined"
                placeholder="Your Name"
              />
              <TextField 
                label="Email" 
                name="email" 
                fullWidth 
                margin="normal" 
                variant="outlined"
                placeholder="Your Email"
              />
              <TextField 
                label="Message" 
                name="message" 
                fullWidth 
                multiline 
                rows={4} 
                margin="normal" 
                variant="outlined"
                placeholder="Your Message"
              />
              <Button 
                type="submit" 
                variant="contained" 
                color="primary" 
                fullWidth 
                sx={{ mt: 2 }}
              >
                Send
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Contact;
