import React from "react";
import "./AboutUs.css";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="hero-overlay">
          <h1 className="hero-heading">About Us</h1>
          <p className="hero-subheading">
            Dedicated to providing expert immigration and visa processing
            services globally.
          </p>
          <br /><br />
          <div className="back-link">
             <Link to="/">
              <span>← Back Home</span>
            </Link>
         </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="about-content">
        <h2 className="content-heading">Who We Are</h2>
        <p className="content-paragraph">
          We are a team of immigration professionals committed to assisting
          individuals and families in achieving their dreams of settling,
          working, or studying abroad. With years of experience and a global
          presence, we provide top-notch consultancy and visa processing
          services that are fast, reliable, and transparent.
        </p>

        <h2 className="content-heading">Our Mission</h2>
        <p className="content-paragraph">
          Our mission is to simplify the immigration process and ensure our
          clients' success in navigating complex visa requirements. We believe
          in integrity, efficiency, and personalized service for every client.
        </p>

        <h2 className="content-heading">Why Choose Us?</h2>
        <ul className="content-list">
          <li>Experienced consultants with proven expertise.</li>
          <li>Comprehensive visa and immigration support.</li>
          <li>Transparent, efficient, and stress-free services.</li>
          <li>Personalized solutions tailored to your goals.</li>
          <li>Global presence with local knowledge.</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
