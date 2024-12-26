import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ClinicalServices from './pages/ClinicalServices';
import MedicalCampaigns from './pages/MedicalCampaigns';
import OurProducts from './pages/OurProducts';
import Home from './pages/Home';
import './styles/global.css';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Home />} />
        <Route path="/clinical-services" element={<ClinicalServices />} />
        <Route path="/medical-campaigns" element={<MedicalCampaigns />} />
        <Route path="/products" element={<OurProducts />} />
      </Routes>
    </div>
  );
};

export default App;