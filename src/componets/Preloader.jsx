import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Preloader.css'; // Add your styles

const Preloader = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); // 3 seconds delay
    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading) {
    return (
      <div className="preloader">
        <div className="spinner">
          <img src="/images/logo.png" alt="" />
        </div>
        <h1>LOADING...</h1>
      </div>
    );
  }

  return children;
};

export default Preloader;
