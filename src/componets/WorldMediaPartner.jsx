import React from "react";
import "./WorldMediaPartner.css";
import ContactInfo from "./contact/ContactInfo";

const mediaPartners = [
  {
    id: 1,
    name: "Global Immigration Times",
    description:
      "A trusted platform for the latest updates and success stories in global immigration services.",
      logo: "/images/pilot.jpg", 
    website: "https://www.globalimmigrationtimes.com",
  },
  {
    id: 2,
    name: "Visa World Weekly",
    description:
      "Providing comprehensive visa tips, guides, and the latest immigration policies.",
      logo: "/images/plane2.jpg", 
    website: "https://www.visaworldweekly.com",
  },
  {
    id: 3,
    name: "Migration Success Hub",
    description:
      "A resourceful hub featuring testimonials, interviews, and expert advice on migration.",
    logo: "/images/plane.jpg", 
    website: "https://www.migrationsuccesshub.com",
  },
];

const WorldMediaPartner = () => {
  return (
    <div className="world-media-partner-container">
      <h1 className="abbout-title">// WORLD MEDIA PARTNERS //</h1>
      <p className="dessc">
        We collaborate with leading media organizations to bring you the latest
        and most reliable information on immigration and visa services.
      </p>
      <div className="media-grid">
        {mediaPartners.map((partner) => (
          <div className="media-card" key={partner.id}>
            <img
              src={partner.logo}
              alt={`${partner.name} logo`}
              className="media-logo"
            />
            <h3 className="media-name">{partner.name}</h3>
            <p className="media-desc">{partner.description}</p>
            <a
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="media-website"
            >
              Visit Website
            </a>
          </div>
        ))}
      </div>
      <ContactInfo/>
    </div>
  );
};

export default WorldMediaPartner;
