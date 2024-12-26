import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer'; 

const Home = () => {
  return (
    <div>
      
      <Header />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;