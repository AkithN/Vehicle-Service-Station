// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import './contact.css';
// import ContactUs from '../../assets/contact.jpg';
// import Footer from "../footer/Footer";
// import { Container } from "@mui/material";

// const Contact = () => {
//   const formRef = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "replace with service id",
//         "replace with template id",
//         formRef.current,
//         "replace with user id"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           console.log("message sent");
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   return (
//     <section className="contact">
//       <div className="contact-form-container">
//         <div className="contact-image">
//           <img src={ContactUs} alt="Contact Us" />
//         </div>
//         <form ref={formRef} onSubmit={sendEmail} className="contact-form">
//           <h2 className="contact-title">Contact Us</h2>
//           <label className="contact-label">Name</label>
//           <input type="text" className="contact-input" name="user_name" placeholder="Your Name" />
//           <label className="contact-label">Email</label>
//           <input type="email" className="contact-input" name="user_email" placeholder="Your Email" />
//           <label className="contact-label">Message</label>
//           <textarea name="message" className="contact-textarea" placeholder="Your Message" />
//           <input type="submit" value="Send" className="contact-submit" />
//         </form>
//       </div>
//       <div className="contactus-footer">
//     <Container 
//         sx={{
//             width: '100%', // or any specific width you need, e.g., '80%', '1200px'
//             height: '300px', // or any specific height you need
//             backgroundColor: 'lightgrey', // optional: to visualize the container's area
//             display: 'flex', // optional: to center content
//             justifyContent: 'center', // optional: to center content horizontally
//             alignItems: 'center', // optional: to center content vertically
//         }}
//     >
//         <Footer />
//     </Container>
// </div>

//     </section>
    
//   );
// };

// export default Contact;

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import './contact.css';
import ContactUs from '../../assets/contact.jpg';
import Footer from "../footer/Footer";
import { Container, Box, Grid, Typography, TextField, Button } from "@mui/material";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "replace with service id",
        "replace with template id",
        formRef.current,
        "replace with user id"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
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
            <form ref={formRef} onSubmit={sendEmail} className="contact-form">
              <Typography variant="h4" component="h2" gutterBottom>
                Contact Us
              </Typography>
              <TextField 
                label="Name" 
                name="user_name" 
                fullWidth 
                margin="normal" 
                variant="outlined"
                placeholder="Your Name"
              />
              <TextField 
                label="Email" 
                name="user_email" 
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

      <Box 
        sx={{ 
          width: '100%', 
          backgroundColor: '#333', 
          mt: 8, 
          py: 4, 
          color: '#fff', 
          display: 'flex', 
          justifyContent: 'center' 
        }}
      >
        <Container>
          <Footer />
        </Container>
      </Box>
    </section>
  );
};

export default Contact;


