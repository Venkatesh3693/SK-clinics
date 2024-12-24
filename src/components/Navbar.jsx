import React, { useState } from 'react';
import '../styles/Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false); // Close the menu after clicking
    };

    return (
        <nav className="navbar">
            <div className="burger-menu" onClick={toggleMenu}>
                <i className="fas fa-bars"></i>
            </div>
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li>
                    <a href="#" onClick={() => scrollToSection('home')}>Home</a>
                </li>
                <li>
                    <a href="#" onClick={() => scrollToSection('services')}>Services</a>
                </li>
                <li>
                    <a href="#" onClick={() => scrollToSection('contact')}>Contact</a>
                </li>
            </ul>
            <div className="social-links">
                <a href="https://www.instagram.com/shreevelanmedicals?igsh=Ynh0b25kbHpzcWh0" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i> <span>Instagram</span>
                </a>
                <a href="mailto:shreevmed@gmail.com">
                    <i className="fas fa-envelope"></i> <span>Email</span>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;