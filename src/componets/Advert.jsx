import React from "react";
import "./Advert.css";
import { LiaPlaneDepartureSolid } from "react-icons/lia";

import { GrHome, GrUserExpert } from "react-icons/gr";
import {MdCarRental } from "react-icons/md";
import { TbWorldCheck } from "react-icons/tb";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Advert = () => {
  const adverts = [
    { title: "Consultancy", icon: <FaExternalLinkSquareAlt/> },
    { title: "Trip Planning", icon: <LiaPlaneDepartureSolid /> },
    { title: "Airbnb", icon: <GrHome />, link: "https://www.instagram.com/zeavixeventandmore/" },
    { title: "Tourism", icon: <TbWorldCheck />, link: "/services" },
    { title: "Transportation Services", icon: <MdCarRental />, link:"/services" },
    { title: "Accurate & Expert Advice", icon: <GrUserExpert />, link:"https://wa.me/message/NL7UY3M3Q6ZOG1" },
  ];

  return (
    <div className="advert-container">
      
      {adverts.map((advert, index) => (
        <Link to={advert.link}>
        <div key={index} className="advert-card">
          <div className="icon">{advert.icon}</div>
          <h3 className="title">{advert.title}</h3>
        </div>
        </Link>
      ))}
      
    </div>
  );
};

export default Advert;
