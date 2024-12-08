import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useAuth } from '../AuthContext'; // Use the custom hook
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase'; 
import { IoIosArrowForward } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); // State to track admin role
  const [showDropdown, setShowDropdown] = useState(false); // State for dropdown
  const { currentUser, logout } = useAuth(); // Get user and logout from AuthContext
  const navigate = useNavigate();
  const navbarRef = useRef(null); // Reference to the navbar

  useEffect(() => {
    const fetchUserRole = async () => {
      if (currentUser) {
        try {
          const userDocRef = doc(db, 'users', currentUser.uid); // Reference to the user's document
          const userDoc = await getDoc(userDocRef);

          if (userDoc.exists() && userDoc.data().role === 'admin') {
            setIsAdmin(true); // Set admin role if the user is an admin
          } else {
            setIsAdmin(false); // Not an admin
          }
        } catch (error) {
          console.error('Error fetching user role:', error);
        }
      }
    };

    fetchUserRole();
  }, [currentUser]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleLogout = () => {
    logout();
    navigate('/'); 
  };

  // Close navbar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false); // Close the menu
        setShowDropdown(false); // Close dropdown
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="navbar-brand">
        <img src="/images/logo.png" alt="" />
        <h5>Diamond Visa & Immigration Services</h5>
        {/* Conditional rendering based on authentication */}
        
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        {isOpen ? 'X' : '☰'}
      </div>

      <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
      <div className="nav-auth-box">
          {currentUser ? (
            <>
              {/* Show Profile link only if not an admin */}
              {!isAdmin && (
                <Link to="/profile" onClick={closeMenu} className="button3">Profile</Link>
              )}
              {isAdmin && ( // Show admin link only if the user is an admin
                <Link to="/admin" onClick={closeMenu} className="button3">Admin</Link>
              )}
              <button className="button1" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <div className="dropdown">
              <button 
                className="login-button dropdown-toggle" 
                onClick={toggleDropdown}
              >
                Login / SignUp
              </button>
              {showDropdown && (
                <div className="dropdown-menu">
                  <Link to="/login" className="dropdown-item" onClick={closeMenu}>Login</Link>
                  <Link to="/reset" className="dropdown-item" onClick={closeMenu}>Forgot Password?</Link>
                  <Link to="/signup" className="dropdown-item" onClick={closeMenu}>Sign Up</Link>
                </div>
              )}
            </div>
          )}
        </div>
        <br /><br />
        <li><Link to="/" onClick={closeMenu}>Home <span><IoIosArrowForward /></span></Link></li>
        <li><Link to="/visa" onClick={closeMenu}>List of Visa<span><IoIosArrowForward /></span></Link></li>
        <li><Link to="/about" onClick={closeMenu}>About<span><IoIosArrowForward /></span></Link></li>
        <li><Link to="/contact1" onClick={closeMenu}>Contact<span><IoIosArrowForward /></span></Link></li>
        <li><Link to="/services" onClick={closeMenu}>Services<span><IoIosArrowForward /></span></Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
