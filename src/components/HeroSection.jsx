import React from 'react';
import '../styles/HeroSection.css'; 

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1>Welcome to SHREE VELAN MEDICALS</h1>
        <p>Your health, our priority.</p>
        <div className="plus-symbol blue" style={{ top: '20%', left: '30%' }}>+</div>
        <div className="plus-symbol green" style={{ top: '40%', left: '70%' }}>+</div>
        <div className="plus-symbol blue" style={{ top: '60%', left: '50%' }}>+</div>
        <div className="plus-symbol green" style={{ top: '80%', left: '20%' }}>+</div>
      </div>
    </section>
  );
};

export default HeroSection;