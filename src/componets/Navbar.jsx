// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand"><img src="/images/logo.png" alt="" /> 
      <h3>DIAMOND</h3>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
      {/* <li><Link to="/tourist" onClick={closeMenu}>Tourist</Link></li>
      <li><Link to="/hotel" onClick={closeMenu}>Hotel</Link></li> */}
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
