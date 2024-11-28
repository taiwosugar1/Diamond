import React from "react";
import "./Advert.css";

const Advert = () => {
  const adverts = [
    { title: "Faster & Reliable", icon: "🚀" },
    { title: "Executant", icon: "🛠️" },
    { title: "Accurate & Expert Advice", icon: "🎯" },
    { title: "Immigration Process Responsibility", icon: "💡" },
    { title: "Legal Immigration", icon: "📜" },
    { title: "Success", icon: "🏆" },
  ];

  return (
    <div className="advert-container">
      {adverts.map((advert, index) => (
        <div key={index} className="advert-card">
          <div className="icon">{advert.icon}</div>
          <h3 className="title">{advert.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Advert;
