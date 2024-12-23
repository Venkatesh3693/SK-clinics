import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ServicesSection.css'; // Import the CSS file for styling

const ServicesSection = () => {
  return (
    <section id="services">
      <h2>Our Services</h2>
      <div className="services-container">
        <div className="card">
          <Link to="/products" style={{ textDecoration: 'none', color: 'inherit' }}>
            <img src="./Products.jpg" alt="Product Listing" className="service-image" />
            <h3>Product Listing</h3>
            <p>Explore our wide range of products.</p>
          </Link>
        </div>
        <div className="card">
          <Link to="/clinical-services" style={{ textDecoration: 'none', color: 'inherit' }}>
            <img src="./Clinic.jpg" alt="Clinical Services" className="service-image" />
            <h3>Clinical Services</h3>
            <p>Learn about our clinical services.</p>
          </Link>
        </div>
        <div className="card">
          <Link to="/medical-campaigns" style={{ textDecoration: 'none', color: 'inherit' }}>
            <img src="./campaign.jpg" alt="Medical Campaigns" className="service-image" />
            <h3>Medical Campaigns</h3>
            <p>Join our medical campaigns.</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;