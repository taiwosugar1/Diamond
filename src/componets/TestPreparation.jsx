import React from "react";
import { FaBookOpen, FaLanguage, FaPassport } from "react-icons/fa"; 
import "./TestPreparation.css";

const testPreparations = [
  {
    id: "01",
    title: "IELTS Exam Preparation",
    description:
      "Diamond Visa and Immigration Services is dedicated to helping you achieve your dream of studying abroad with expert guidance and tailored IELTS training programs.",
    backgroundImage: "/images/exam1.png", 
    icon: <FaBookOpen />, 
    number: 1,
  },
  {
    id: "02",
    title: "TOEFL Exam Preparation",
    description:
      "Prepare for your TOEFL exam with Diamond Visa and Immigration Services. We offer comprehensive coaching to ensure you excel and meet the language requirements of your dream university.",
    backgroundImage: "https://images.pexels.com/photos/249360/pexels-photo-249360.jpeg?auto=compress&cs=tinysrgb&w=400", 
    icon: <FaLanguage />, 
    number: 2,
  },
  {
    id: "03",
    title: "Citizenship Test Preparation",
    description:
      "Diamond Visa and Immigration Services supports you in your journey to citizenship with expert guidance and resources to help you pass your citizenship test with confidence.",
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
          data-aos="flip-right"
        >
          <div className="test-content" >
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
