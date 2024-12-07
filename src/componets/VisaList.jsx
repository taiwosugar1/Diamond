import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./VisaList.css";
import visas from "./array/visas";


const VisaList = () => {
  const navigate = useNavigate();

  const handleCardClick = (visa) => {
    if (visa.link) {
      // For Emergency Visa, navigate to WhatsApp
      window.open(visa.link, "_blank");
    } else {
      // Navigate to Single Visa Page with serializable data
      navigate(`/visa/${visa.id}`, {
        state: {
          id: visa.id,
          type: visa.type,
          description: visa.description,
          backgroundImage: visa.backgroundImage,
          details: visa.details,
        },
      });
    }
  };
  

  return (
    <section className="visa-list-container">
     <div className="contact-banner">
        <div className="overlay">
        <h1 data-aos="zoom-in" >Our Visa Services</h1>
        <br /><br />
        <div className="back-link">
        <Link to="/">
          <span>← Back Home</span>
        </Link>
       </div>
      </div>
      </div>
      <br /><br />
      <div className="visa-grid">
        {visas.map((visa) => (
          <div
            key={visa.id}
            className="viisa-card"
            data-aos="flip-right"
            style={{ backgroundImage: `url(${visa.backgroundImage})` }}
            onClick={() => handleCardClick(visa)}
          >
            <div className="visa-icon">{visa.icon}</div>

            <h3 className="visa-title">{visa.type}</h3>
            <p className="visa-description">{visa.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VisaList;
