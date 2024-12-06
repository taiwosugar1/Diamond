import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-logo">
        <img src="/images/logo.png" alt="Diamond Visa Logo" />
      </div>
      <div className="loader-spinner"></div>
      <p className="loader-text">Diamond Visa & Immigration Services</p>
    </div>
  );
};

export default Loader;
