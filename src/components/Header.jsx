import React from 'react';

const Header = () => {
    return (
        <header style={{ backgroundColor: '#004d40', color: 'white', padding: '1rem', textAlign: 'center' }}>
            <img src="./logo.png" alt="SHREE VELAN MEDICALS Logo" style={{ height: '50px', marginRight: '1rem' }} />
            <h1 style={{ display: 'inline', fontSize: '1.5rem' }}>SHREE VELAN MEDICALS</h1>
        </header>
    );
};

export default Header;
