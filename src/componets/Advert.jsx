import React from "react";
import "./Advert.css";
import { LiaPlaneDepartureSolid } from "react-icons/lia";
import { GrHome, GrUserExpert } from "react-icons/gr";
import { MdCarRental } from "react-icons/md";
import { TbWorldCheck } from "react-icons/tb";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Advert = () => {
  const adverts = [
    { title: "Consultancy", icon: <FaExternalLinkSquareAlt />, link: "/service-details/consultancy" },
    { title: "Trip Planning", icon: <LiaPlaneDepartureSolid />, link: "/service-details/trip-planning" },
    { title: "Airbnb", icon: <GrHome />, link: "/service-details/airbnb" },
    { title: "Group Tourist", icon: <TbWorldCheck />, link: "/service-details/tourism" },
    { title: "Transportation Services", icon: <MdCarRental />, link: "/service-details/transportation-services" },
    { title: "Accurate & Expert Advice", icon: <GrUserExpert />, link: "/service-details/expert-advice" },
  ];

  return (
    <div className="advert-container">
      {adverts.map((advert, index) => (
        <Link to={advert.link} key={index}>
          <div className="advert-card">
            <div className="icon">{advert.icon}</div>
            <h3 className="title">{advert.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Advert;
