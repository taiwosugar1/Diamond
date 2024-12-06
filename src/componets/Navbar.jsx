import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { AuthContext } from '../AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser, logout } = useContext
  (AuthContext); // Get user and logout from AuthContext
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    logout(); // Call the logout function from AuthContext
    navigate('/'); // Redirect to home page after logout
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="/images/logo.png" alt="" />
        <h5>Diamond Visa & Immigration Services</h5>
          {/* Conditional rendering based on authentication */}
         <div className='nav-auth-box'> {currentUser ? (
          <>
            <Link to="/profile" onClick={closeMenu} className='button3'>Profile</Link>
            <Link className="button1" onClick={handleLogout}>Logout</Link>
          </>
        ) : (
          <Link to="/login" onClick={closeMenu} className='login-button'>Login / SignUp</Link>
        )}</div>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        {isOpen ? 'X' : '☰'}
      </div>

      <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/visa" onClick={closeMenu}>List of Visa</Link></li>
        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
        <li><Link to="/contact1" onClick={closeMenu}>Contact</Link></li>
        <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
      
      </ul>
    </nav>
  );
};

export default Navbar;
