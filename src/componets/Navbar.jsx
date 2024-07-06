import React, { useState } from 'react';
import "./Navbar.css";
import { FaFacebook, FaInstagram, FaTwitter, FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
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
        <NavMenu isOpen={isOpen} isMobile={isMobile} handleToggle={handleToggle} />
        <SocialMedia />
      </header>
    </div>
  );
};

const NavMenu = ({ isOpen, isMobile, handleToggle }) => {
  return (
    <ul className={`nav-details ${isMobile ? 'open' : ''}`}>
      <li onClick={handleToggle}>Contact</li>
      {isOpen && (
        <div className="contact-details"> 
          <p>Navigating your path toa brighter future with Diamond Visa and Immigration Services. </p>
          <ul>
            <li><a href="tel: +1-614-707-6245">Phone</a></li>
            <li><a href="https://wa.me/message/NL7UY3M3Q6ZOG1">Whatsapp </a></li>
          </ul>
        </div>
      )}


      <Link to={"/"}><li>Country</li></Link>
      <li className='hotel'>Hotel
        <ul>
          <li>Executive</li>
          <li>Five Star</li>
          <li>Three Star</li>
        </ul>
      </li>

      
      <Link to={"/shop"}><li> Shop</li></Link>
      <Link to={"/"}><li >Home</li></Link>
      <Link to={"/about-us"}><li>About Us</li></Link>
    
    </ul>
  );
};

const SocialMedia = () => {
  return (
    <ul className='media'>
      <Link to={"https://instagram.com/diamondvisa/"}><li><FaInstagram/></li></Link>
      <Link to={"https://facebook.com/diamondvisa"}><li><FaFacebook/></li></Link>
      <Link to={"https://twiiter.com/diamondvisa"}><li><FaTwitter/></li></Link>
      <Link to={"https://wa.me/message/NL7UY3M3Q6ZOG1"}><li><FaWhatsapp/></li></Link>
    </ul>
  );
};

export default Navbar;
