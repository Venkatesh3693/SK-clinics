import React from 'react';
import '../styles/Header.css'; 

const Header = () => {
    return (
        <header className="header">
            <img src="./logo1.png" alt="SHREE VELAN MEDICALS Logo" className="logo" />
            <h1 className="title">SHREE VELAN MEDICALS</h1>
        </header>
    );
};

export default Header;