import React, { useState, useEffect } from 'react';
import '../styles/ClinicalServices.css'; // Import the CSS file for styling

const services = [
  {
    id: 1,
    name: 'Laboratory Tests',
    description: 'We offer a wide range of laboratory tests to help diagnose and monitor various health conditions.',
    images: ['./Lab(1).jpg', './Lab(2).jpg', './Lab(3).jpg'],
  },
  {
    id: 2,
    name: 'Doctor Care',
    description: 'Our experienced doctors provide comprehensive care for all your health needs.',
    images: ['./Doctor-Care(1).jpg', './Doctor-Care(2).jpg', './Doctor-Care(3).jpg'],
  },
  {
    id: 3,
    name: 'Preventive Services',
    description: 'We offer preventive services to help you maintain good health and prevent diseases.',
    images: ['./Preventive-Services(1).jpg', './Preventive-Services(2).jpg', './Preventive-Services(3).jpg'],
  },
  {
    id: 4,
    name: 'Injury Care',
    description: 'Our team provides expert care for injuries to help you recover quickly and safely.',
    images: ['./Injury-Care(1).jpg', './Injury-Care(2).jpg', './Injury-Care(3).jpg'],
  },
  {
    id: 5,
    name: 'Inpatient Care',
    description: 'We offer inpatient care services to provide you with the best possible treatment and support.',
    images: ['./Inpatient-Care(1).jpg', './Inpatient-Care(2).jpg', './Inpatient-Care(3).jpg'],
  },
];

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="image-slider">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`slider-image ${index === currentImageIndex ? 'active' : ''}`}
        />
      ))}
    </div>
  );
};

const ClinicalServices = () => {
  return (
    <section id="clinical-services">
      <h2>SK Clinical Services</h2>
      {services.map((service) => (
        <div key={service.id} className="service-card">
          <h3>{service.name}</h3>
          <p>{service.description}</p>
          <ImageSlider images={service.images} />
        </div>
      ))}
    </section>
  );
};

export default ClinicalServices;