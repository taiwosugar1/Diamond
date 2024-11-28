import React from "react";
import "./Advert.css";
import { LiaPlaneDepartureSolid } from "react-icons/lia";
import { GiAutoRepair } from "react-icons/gi";
import { GrUserExpert } from "react-icons/gr";
import { FaLightbulb, FaAward } from "react-icons/fa6";
import { MdBookmarkAdded } from "react-icons/md";

const Advert = () => {
  const adverts = [
    { title: "Faster & Reliable", icon: <LiaPlaneDepartureSolid/> },
    { title: "Executant", icon: <GiAutoRepair /> },
    { title: "Accurate & Expert Advice", icon: <GrUserExpert /> },
    { title: "Immigration Process Responsibility", icon: <FaLightbulb /> },
    { title: "Legal Immigration", icon: <MdBookmarkAdded /> },
    { title: "Success", icon: <FaAward /> },
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
