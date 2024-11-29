import React from "react";
import { FaBookOpen, FaLanguage, FaPassport } from "react-icons/fa"; 
import "./TestPreparation.css";

const testPreparations = [
  {
    id: "01",
    title: "IELTS Exam Preparation",
    description:
      "Immigway Visa Consultancy takes great pride in its commitment for helping international students from all by going to use to be sure there isn't anything embarrassing.",
    backgroundImage: "/images/exam1.png",
    icon: <FaBookOpen />, 
    number: 1,
  },
  {
    id: "02",
    title: "TOEFL Exam Preparation",
    description:
      "Immigway Visa Consultancy takes great pride in its commitment for helping international students from all by going to use to be sure there isn't anything embarrassing.",
    backgroundImage: "https://images.pexels.com/photos/249360/pexels-photo-249360.jpeg?auto=compress&cs=tinysrgb&w=400", 
    icon: <FaLanguage />, 
    number: 2,
  },
  {
    id: "03",
    title: "Citizenship Test",
    description:
      "Immigway Visa Consultancy takes great pride in its commitment for helping international students from all by going to use to be sure there isn't anything embarrassing.",
    backgroundImage: "https://images.pexels.com/photos/3808060/pexels-photo-3808060.jpeg?auto=compress&cs=tinysrgb&w=400",
    icon: <FaPassport />,
    number: 3,
  },
];

const TestPreparation = () => {
  return (
    <div className="test-preparation-container">
      {testPreparations.map((test) => (
        <div
          key={test.id}
          className="test-card"
          style={{ "--bg-image": `url(${test.backgroundImage})` }}
        >
          <div className="test-content">
            <div className="test-icon">{test.icon}</div>
            <h1 className="number">{test.number}</h1>
            <h3 className="test-title">{test.title}</h3>
            <p className="test-description">{test.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestPreparation;
