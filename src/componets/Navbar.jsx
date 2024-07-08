import React, { useState } from 'react';
import "./Navbar.css";
import { FaFacebook, FaInstagram, FaTwitter, FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = ({ filterHotelsByCategory }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleMobileToggle = () => {
    setIsMobile((prevIsMobile) => !prevIsMobile);
  };

  return (
    <div className='navbar'>
      <header className='header'>
        <div className="logo">
          <h1>D<span>v</span></h1>
        </div>
        <div className="mobile-icon" onClick={handleMobileToggle}>
          {isMobile ? <FaTimes /> : <FaBars />}
        </div>
        <NavMenu
          isOpen={isOpen}
          isMobile={isMobile}
          handleToggle={handleToggle}
          filterHotelsByCategory={filterHotelsByCategory}
        />
        <SocialMedia />
      </header>
    </div>
  );
};

const NavMenu = ({ isOpen, isMobile, handleToggle, filterHotelsByCategory }) => {
  return (
    <ul className={`nav-details ${isMobile ? 'open' : ''}`}>
      <li onClick={handleToggle}>Contact</li>
      {isOpen && (
        <div className="contact-details">
          <h3>Trust Diamond Visa and Immigration Services for a stress-free application process</h3>
          <p>Navigating your path to a brighter future with Diamond Visa and Immigration Services.</p>
          <ul>
            <li><a href="tel: +1-614-707-6245" className='a1'>Phone</a></li>
            <li><a href="mailto: info@diamondvisa.com" className='a2'>Email</a></li>
            <li><a href="https://wa.me/message/NL7UY3M3Q6ZOG1" className='a3'>Whatsapp </a></li>
          </ul>
        </div>
      )}

      <Link to={"tourlist"}><li>Country</li></Link>

      <li className='hotel'>Hotel
        <div>
          <ul>
            <Link to={"hotels"} onClick={() => filterHotelsByCategory('executive')}><li>Executive</li></Link>
            <Link to={"hotels"} onClick={() => filterHotelsByCategory('five star')}><li>Five Star</li></Link>
            <Link to={"hotels"} onClick={() => filterHotelsByCategory('three star')}><li>Three Star</li></Link>
            <Link to={"hotels"} onClick={() => filterHotelsByCategory('')}><li>View All </li></Link>
          </ul>
        </div>
      </li>

      <Link to={"/"}><li >Home</li></Link>
      <Link to={"/about-us"}><li>About Us</li></Link>
    </ul>
  );
};

const SocialMedia = () => {
  return (
    <ul className='media'>
      <Link to={"https://instagram.com/diamondvisa/"}><li><FaInstagram /></li></Link>
      <Link to={"https://facebook.com/diamondvisa"}><li><FaFacebook /></li></Link>
      <Link to={"https://twiiter.com/diamondvisa"}><li><FaTwitter /></li></Link>
      <Link to={"https://wa.me/message/NL7UY3M3Q6ZOG1"}><li><FaWhatsapp /></li></Link>
    </ul>
  );
};

export default Navbar;