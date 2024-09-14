// src/components/Contact/Contact.js
import React from 'react';
import './Contact.css'; // Import CSS for styling

const Contact = () => {
  return (
    <section id="contact" className="contact"> {/* This ID should match href in Header */}
      <div className="container">
        <h2>Contact Us</h2>
        <p>If you have any questions or want to book an event, please reach out to us.</p>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
