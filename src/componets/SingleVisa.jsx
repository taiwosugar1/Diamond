import React from "react";
import { useLocation } from "react-router-dom";
import FAQ from "./FAQ";  // Importing the FAQ component
import "./SingleVisa.css";

const SingleVisa = () => {
  const location = useLocation();
  const { visa } = location.state;

  return (
    <div className="single-visa-container" data-aos="fade-up">
      <div
        className="visa-banner"
        style={{ backgroundImage: `url(${visa.backgroundImage})` }}
      >
        <h1 className="visa-title">{visa.type}</h1>
      </div>
      <div className="visa-details">
        <h2>About {visa.type}</h2>
        <p>{visa.details}</p>
        <h3>Description</h3>
        <p>{visa.description}</p> {/* Added description here */}
      </div>

      {/* FAQ Component */}
      <FAQ visaType={visa.type} />
    </div>
  );
};

export default SingleVisa;
