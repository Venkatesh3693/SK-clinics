import React from 'react';
import '../styles/Footer.css'; 
import { FaMapMarkerAlt } from 'react-icons/fa'; // Import the location icon

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2023 SHREE VELAN MEDICALS. All rights reserved.</p>
        <p>Contact us: shreevmed@gmail.com</p>
        <p><FaMapMarkerAlt /> No.1/64, Yamini Complex G.N.T.Road, Arambakkam, Gummidipoondi, Tamil Nadu 601201</p>
      </div>
    </footer>
  );
};

export default Footer;