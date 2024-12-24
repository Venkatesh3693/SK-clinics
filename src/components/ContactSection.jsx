import React from 'react';
import '../styles/ContactSection.css'; // Import the CSS file for styling

const ContactSection = () => {
  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <form>
        <input type="text" name="name" placeholder="Name" required />
        <input type="tel" name="mobile" placeholder="Mobile Number" />
        <input type="email" name="email" placeholder="Email" />
        <textarea name="message" placeholder="Message" required></textarea>
        <button type="submit">Submit</button>
      </form>
      <div className="contact-options">
        <a href="https://www.instagram.com/shreevelanmedicals?igsh=Ynh0b25kbHpzcWh0" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i> <span>Instagram</span>
        </a>
        <a href="mailto:shreevmed@gmail.com">
          <i className="fas fa-envelope"></i> <span>Email</span>
        </a>
        <a href="tel:+919003174634">
          <i className="fas fa-phone"></i> <span>Mobile</span>
        </a>
      </div>
    </section>
  );
};

export default ContactSection;