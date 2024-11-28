import React from "react";
import "./VisaList.css";

const visas = [
  {
    type: "Tourist Visa",
    description: "Perfect for those who want to explore and travel.",
    icon: "fas fa-plane",
  },
  {
    type: "Student Visa",
    description: "For those pursuing education in top institutions abroad.",
    icon: "fas fa-graduation-cap",
  },
  {
    type: "Work Visa",
    description: "Opportunities to work legally in advanced economies.",
    icon: "fas fa-briefcase",
  },
  {
    type: "Business Visa",
    description: "For entrepreneurs and business trips.",
    icon: "fas fa-business-time",
  },
  {
    type: "Family Visa",
    description: "Reunite with loved ones abroad.",
    icon: "fas fa-home",
  },
  {
    type: "Investor Visa",
    description: "For investors looking to grow their wealth overseas.",
    icon: "fas fa-coins",
  },
  {
    type: "Permanent Residency",
    description: "Live and settle permanently in a foreign country.",
    icon: "fas fa-address-card",
  },
  {
    type: "Medical Visa",
    description: "Access world-class healthcare facilities abroad.",
    icon: "fas fa-heartbeat",
  },
];

const VisaList = () => {
  return (
    <section className="visa-list-container">
      <h2 className="visa-list-heading">Our Visa Services</h2>
      <div className="visa-grid">
        {visas.map((visa, index) => (
          <div key={index} className="visa-card">
            <div className="visa-icon">
              <i className={visa.icon}></i>
            </div>
            <h3 className="visa-title">{visa.type}</h3>
            <p className="visa-description">{visa.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VisaList;
