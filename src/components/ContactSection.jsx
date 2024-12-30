import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Import the location icon
import '../styles/ContactSection.css'; 

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
      <div className="reach-us-container">
        <button 
          className="reach-us-button" 
          onClick={() => window.open('https://www.google.com/maps/place/SHREE+VELAN+MEDICALS/@13.5438255,80.0667991,17.79z/data=!4m6!3m5!1s0x3a4d77b758090367:0xc8cb7b3bd49a1f01!8m2!3d13.5437581!4d80.0683251!16s%2Fg%2F11tg0t27p2?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoJLDEwMjExMjM0SAFQAw%3D%3D', '_blank')}
        >
          <FaMapMarkerAlt /> Reach Us
        </button>
      </div>
    </section>
  );
};

export default ContactSection;