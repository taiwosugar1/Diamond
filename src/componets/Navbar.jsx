import React, { useState } from 'react';
import "./Navbar.css";
import { FaFacebook, FaInstagram, FaTwitter, FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = ({ filterHotelsByCategory }) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleMobileToggle = () => {
    setIsMobile(!isMobile);
  };

  const closeMobileMenu = () => {
    setIsMobile(false);
  };

  return (
    <nav className='navbar'>
      <div className="navbar-container">
        <div className="logo">
          <img src="diamond-logo.png" alt="Logo" />
        </div>
        <div className="mobile-icon" onClick={handleMobileToggle}>
          {isMobile ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={isMobile ? 'nav-menu active' : 'nav-menu'}>
          <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
          <li><Link to="/about-us" onClick={closeMobileMenu}>About Us</Link></li>
          <li><Link to="/tourlist" onClick={closeMobileMenu}>Country</Link></li>
          <li className='dropdown'>
            Hotel
            <ul className='dropdown-menu'>
              <li><Link to="/hotels" onClick={() => { filterHotelsByCategory('executive'); closeMobileMenu(); }}>Executive</Link></li>
              <li><Link to="/hotels" onClick={() => { filterHotelsByCategory('five star'); closeMobileMenu(); }}>Five Star</Link></li>
              <li><Link to="/hotels" onClick={() => { filterHotelsByCategory('three star'); closeMobileMenu(); }}>Three Star</Link></li>
              <li><Link to="/hotels" onClick={() => { filterHotelsByCategory(''); closeMobileMenu(); }}>View All</Link></li>
            </ul>
          </li>
          <li><Link to="/contact" onClick={closeMobileMenu}>Contact</Link></li>
        </ul>
        <div className="social-icons">
          <a href="https://instagram.com/diamondvisa/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://facebook.com/diamondvisa" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://twitter.com/diamondvisa" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://wa.me/message/NL7UY3M3Q6ZOG1" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
