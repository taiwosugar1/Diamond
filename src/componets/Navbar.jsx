import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext'; // Adjust the path as per your folder structure
import './Navbar.css';

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
        <h3>Diamond Visa & Immigration Services</h3>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/visa" onClick={closeMenu}>List of Visa</Link></li>
        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
        <li><Link to="/contact1" onClick={closeMenu}>Contact</Link></li>
        <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
        
        {/* Conditional rendering based on authentication */}
        {currentUser ? (
          <>
            <li><Link to="/profile" onClick={closeMenu}>Profile</Link></li>
            <li><button className="logout-button" onClick={handleLogout}>Logout</button></li>
          </>
        ) : (
          <li className="auth-li"><Link to="/login" onClick={closeMenu}>Login / SignUp</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
