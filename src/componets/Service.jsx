import React from "react";
import "./Service.css";
import { Link, useNavigate } from "react-router-dom";
import services from "./array/services";

const continents = [
  {
    name: "Africa",
    description:
      "Discover opportunities across Africa, from work permits to family reunification programs in countries like South Africa, Nigeria, and Kenya.",
    image: "https://flagicons.lipis.dev/flags/4x3/af.svg", // Africa flag CDN
    keyPoints: [
      "Fast visa processing for South Africa",
      "Business opportunities in Kenya",
      "Study abroad programs in Egypt and Morocco",
    ],
  },
  {
    name: "Asia",
    description:
      "Asia offers vibrant cultures, study opportunities, and business investment visas in leading economies like China, Japan, and UAE.",
    image: "https://flagicons.lipis.dev/flags/4x3/as.svg", // Asia flag CDN
    keyPoints: [
      "Investor visas in Dubai",
      "Work permits for Japan and South Korea",
      "Study abroad in China and Singapore",
    ],
  },
  {
    name: "Europe",
    description:
      "Europe remains a top destination for study, work, and family reunification visas. Enjoy access to Schengen visa services.",
    image: "https://flagicons.lipis.dev/flags/4x3/eu.svg", // Europe flag CDN
    keyPoints: [
      "Schengen visa expertise",
      "Residency programs in Portugal and Spain",
      "Study and work in Germany and France",
    ],
  },
  {
    name: "North America",
    description:
      "Visa support for travel, study, and work in the USA and Canada, with additional pathways for family reunification.",
    image: "https://flagicons.lipis.dev/flags/4x3/na.svg", // North America flag CDN
    keyPoints: [
      "Express Entry program for Canada",
      "H-1B visa expertise for the USA",
      "Student visa services for top universities",
    ],
  },
  {
    name: "Australia & Oceania",
    description:
      "Explore study and work opportunities in Australia and New Zealand, including family and skilled migration services.",
    image: "https://flagicons.lipis.dev/flags/4x3/au.svg", // Australia flag CDN
    keyPoints: [
      "Skilled migration visas for Australia",
      "Study opportunities in New Zealand",
      "Family sponsorship pathways",
    ],
  },
  {
    name: "South America",
    description:
      "Uncover unique opportunities for study, business, and travel across South America, including Brazil and Argentina.",
    image: "https://flagicons.lipis.dev/flags/4x3/sa.svg", // South America flag CDN
    keyPoints: [
      "Travel visas for Brazil and Chile",
      "Work opportunities in Argentina",
      "Cultural exchange programs",
    ],
  },
];

const Service = () => {
  const navigate= useNavigate();
  const handleClick = (service) => {
    navigate(`/services/${service.id}`);
};
  return (
    <section className="services-page">
      {/* Service Section */}
      <div className="contact-banner">
        <div className="overlay">
        <h1 data-aos="zoom-in" >Our Premium Visa Services</h1>
        <br /><br />
        <div className="back-link">
        <Link to="/">
          <span>← Back Home</span>
        </Link>
       </div>
      </div>
      </div>
      <br /><br />
      <div className="intro-section">
       
        <p className="services-description">
          We provide elite visa solutions for individuals, families, and
          businesses. Our expertise and tailored services cater to high-class
          clients aiming to achieve their global aspirations. Trust us to guide
          you every step of the way.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.id} data-aos="zoom-in"  onClick={() => handleClick(service)}>
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />
            <div className="service-info">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <Link to={`/services/${service.id}`} className="read-more">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      {/* Continent Section */}
      <div className="continent-section">
        <h2 className="continent-heading">Visa Services by Continent</h2>
        <div className="continent-grid">
          {continents.map((continent, index) => (
            <div className="continent-card" key={index} data-aos="fade-up">
              <img
                src={continent.image}
                alt={continent.name}
                className="continent-image"
              />
              <div className="continent-info">
                <h3 className="continent-title">{continent.name}</h3>
                <p className="continent-description">{continent.description}</p>
                <ul className="continent-keypoints">
                  {continent.keyPoints.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
