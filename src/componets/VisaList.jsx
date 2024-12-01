import React from "react";
import { FaPlane, FaGraduationCap, FaBusinessTime, FaHome, FaCoins, FaAddressCard, FaHeartbeat } from "react-icons/fa";
import "./VisaList.css";
import { FaMapLocation } from "react-icons/fa6";

const visas = [
  {
    type: "Tourist Visa",
    description: "Perfect for those who want to explore and travel.",
    icon: <FaMapLocation />,
    backgroundImage: "/images/st2.png",
  },
  {
    type: "Emergency Visa",
    description: "",
    icon: <FaGraduationCap />,
    backgroundImage: "/images/st1.png",
  },
  {
    type: "K1/i-130 Visa application ",
    description: "Fiancé(e) or relative visa for U.S. immigration. ",
    icon: <FaPlane />,
    backgroundImage: "/images/st9.png",
  },
  {
    type: "Business Visa",
    description: "For entrepreneurs and business trips.",
    icon: <FaBusinessTime />,
    backgroundImage: "/images/st4.png",
  },
  {
    type: "Family Visa",
    description: "Reunite with loved ones abroad.",
    icon: <FaHome />,
    backgroundImage: "/images/st5.png",
  },
  {
    type: "Visa Extention",
    description: "",
    icon: <FaCoins />,
    backgroundImage: "/images/st6.png",
  },
  {
    type: "Permanent Residency",
    description: "Live and settle permanently in a foreign country.",
    icon: <FaAddressCard />,
    backgroundImage: "/images/st8.png",
  },
  {
    type: "Medical Visa",
    description: "Access world-class healthcare facilities abroad.",
    icon: <FaHeartbeat />,
    backgroundImage: "/images/st7.png",
  },
];

const VisaList = () => {
  return (
    <section className="visa-list-container">
      <h2 className="visa-list-heading" data-aos="zoom-in">Our Visa Services</h2>
      <div className="visa-grid">
        {visas.map((visa, index) => (
          <div
            key={index}
            className="viisa-card " data-aos="flip-right"
            style={{ backgroundImage: `url(${visa.backgroundImage})` }}
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
