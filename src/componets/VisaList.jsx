import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPlane, FaGraduationCap, FaBusinessTime, FaHome, FaCoins, FaAddressCard, FaHeartbeat } from "react-icons/fa";
import "./VisaList.css";
import { FaMapLocation } from "react-icons/fa6";

const visas = [
  {
    id: 1,
    type: "Tourist Visa",
    description: "Perfect for those who want to explore and travel.",
    icon: "FaMapLocation",
    backgroundImage: "/images/st2.png",
    details: "The Tourist Visa is ideal for those who wish to explore and travel to new destinations. It allows short-term stays and is perfect for leisure and sightseeing.",
  },
  {
    id: 2,
    type: "Emergency Visa",
    description: "Immediate attention and processing.",
    icon: "FaGraduationCap",
    backgroundImage: "/images/st1.png",
    details: "The Emergency Visa is designed for urgent situations, providing expedited processing for individuals facing time-sensitive travel needs.",
    link: "https://wa.me/16147076245?text=Hi, I need assistance with an Emergency Visa.",
  },
  {
    id: 3,
    type: "K1/i-130 Visa Application",
    description: "Fiancé(e) or relative visa for U.S. immigration.",
    icon: "FaPlane",
    backgroundImage: "/images/st9.png",
    details: "The K1/i-130 Visa is for those seeking U.S. immigration through a fiancé(e) or a close relative. It facilitates family reunification.",
  },
  {
    id: 4,
    type: "Naija Wife / Resident Permit",
    description: "Helping you secure residency or permits through marriage or other legal means.",
    icon: "FaAddressCard",
    backgroundImage: "/images/st10.png",
    details: "The Naija Wife / Resident Permit service is designed for individuals who are married to Nigerian citizens or seeking residency permits through marriage or other legal pathways. We provide guidance and assistance with the necessary documentation, ensuring compliance with immigration regulations and a smooth application process. Whether you are a foreign spouse or an individual seeking long-term residency, we are here to help.",
  },
  
  {
    id: 5,
    type: "Business Visa",
    description: "For business-related travel and meetings.",
    icon: "FaBusinessTime",
    backgroundImage: "/images/st5.png",
    details: "The Business Visa is designed for individuals traveling for business purposes, such as attending conferences, meetings, or exploring investment opportunities.",
  },
  {
    id: 6,
    type: "Visa Extension",
    description: "Apply for an extension to your existing visa.",
    icon: "FaCoins",
    backgroundImage: "/images/st6.png",
    details: "The Visa Extension allows individuals to extend their stay in a foreign country beyond their initial visa expiration. It is ideal for those who wish to continue working, studying, or staying in the country under the same visa category. If you need assistance with applying for a Visa Extension, we are here to help you navigate the process.",
  },
];

const VisaList = () => {
  const navigate = useNavigate();

  const handleCardClick = (visa) => {
    if (visa.link) {
      // For Emergency Visa, navigate to WhatsApp
      window.open(visa.link, "_blank");
    } else {
      // Navigate to Single Visa Page with data
      navigate(`/visa/${visa.id}`, { state: { visa } });
    }
  };

  return (
    <section className="visa-list-container">
      <h2 className="visa-list-heading" data-aos="zoom-in">Our Visa Services</h2>
      <div className="visa-grid">
        {visas.map((visa) => (
          <div
            key={visa.id}
            className="visa-card"
            data-aos="flip-right"
            style={{ backgroundImage: `url(${visa.backgroundImage})` }}
            onClick={() => handleCardClick(visa)}
          >
            <div className="visa-icon">{React.createElement(require("react-icons/fa6")[visa.icon])}</div>
            <h3 className="visa-title">{visa.type}</h3>
            <p className="visa-description">{visa.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VisaList;
