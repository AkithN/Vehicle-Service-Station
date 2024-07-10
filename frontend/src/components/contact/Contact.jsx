import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import './contact.css';
import ContactUs from '../../assets/contact.jpg';

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
      <div className="contact-form-container">
        <div className="contact-image">
          <img src={ContactUs} alt="Contact Us" />
        </div>
        <form ref={formRef} onSubmit={sendEmail} className="contact-form">
          <h2 className="contact-title">Contact Us</h2>
          <label className="contact-label">Name</label>
          <input type="text" className="contact-input" name="user_name" placeholder="Your Name" />
          <label className="contact-label">Email</label>
          <input type="email" className="contact-input" name="user_email" placeholder="Your Email" />
          <label className="contact-label">Message</label>
          <textarea name="message" className="contact-textarea" placeholder="Your Message" />
          <input type="submit" value="Send" className="contact-submit" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
