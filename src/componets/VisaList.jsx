import React from "react";
import { FaPlane, FaGraduationCap, FaBriefcase, FaBusinessTime, FaHome, FaCoins, FaAddressCard, FaHeartbeat } from "react-icons/fa";
import "./VisaList.css";

const visas = [
  {
    type: "Tourist Visa",
    description: "Perfect for those who want to explore and travel.",
    icon: <FaPlane />,
    backgroundImage: "/images/st2.png",
  },
  {
    type: "Student Visa",
    description: "For those pursuing education in top institutions abroad.",
    icon: <FaGraduationCap />,
    backgroundImage: "/images/st1.png",
  },
  {
    type: "K1/i-130 Visa application ",
    description: "A great Opportunities to Visit Kenya. ",
    icon: <FaBriefcase />,
    backgroundImage: "/images/st3.png",
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
    type: "Investor Visa",
    description: "For investors looking to grow their wealth overseas.",
    icon: <FaCoins />,
    backgroundImage: "/images/st6.png",
  },
  {
    type: "Permanent Residency",
    description: "Live and settle permanently in a foreign country.",
    icon: <FaAddressCard />,
    backgroundImage: "/images/st7.png",
  },
  {
    type: "Medical Visa",
    description: "Access world-class healthcare facilities abroad.",
    icon: <FaHeartbeat />,
    backgroundImage: "/images/st8.png",
  },
];

const VisaList = () => {
  return (
    <section className="visa-list-container">
      <h2 className="visa-list-heading">Our Visa Services</h2>
      <div className="visa-grid">
        {visas.map((visa, index) => (
          <div
            key={index}
            className="viisa-card"
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
