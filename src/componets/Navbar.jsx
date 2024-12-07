import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useAuth } from '../AuthContext'; // Use the custom hook
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase'; // Import Firestore instance

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); // State to track admin role
  const { currentUser, logout } = useAuth(); // Get user and logout from AuthContext
  const navigate = useNavigate();

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
            <Link to="/login" onClick={closeMenu} className="login-button">Login / SignUp</Link>
          )}
        </div>
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
