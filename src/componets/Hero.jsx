import React, { useState } from "react";
import "./Hero.css";

const Hero = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <section className="hero">
      <div className="herro-content">
        <p className="herro-subtext">Gateway to Global Opportunities</p>
        <h1 className="herro-heading">Your Trusted Immigration & Visa Partner</h1>
        <button className="hero-button" onClick={handleButtonClick}>
          Get Started
        </button>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <button className="popup-close-button" onClick={closePopup}>
              &times;
            </button>
            <h2 className="popup-welcome">Welcome to Diamond Visa Services!</h2>
            <ul className="popup-list">
              <li>
                <a href="/visa-application">Visa Application</a>
              </li>
              <li>
                <a href="/immigration-advice">Immigration Advice</a>
              </li>
              <li>
                <a href="/talk-to-agency">Talk to an Immigration Agency</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
