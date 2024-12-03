import React from "react";
import "./Footer.css";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import visas from "./array/visas";
import NewsletterComponent from './NewsletterComponent';
import services from "./array/services";

const Footer = () => {

  const navigate = useNavigate();
  const handleCardClick = (visa) => {
    if (visa.link) {
      // For Emergency Visa, navigate to WhatsApp
      window.open(visa.link, "_blank");
    } else {
      // Navigate to Single Visa Page with serializable data
      navigate(`/visa/${visa.id}`);
    }
  };

  const handleClick = (service) => {
      navigate(`/services/${service.id}`);
  };
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>About Us</h3>
        <p>
          Migrify is the process of moving to a new country or region with the intention of staying and living there.
        </p>
        <div className="foot-icons">
          <h3>Follow Us:</h3>
          <div className="con-social">
            <Link
              to={"https://www.instagram.com/diamondvisaservices"}
              className="con-social-icon social-instagram"
            >
              <FaInstagram />
            </Link>
            <Link
              to={"https://facebook.com/diamondvisa"}
              className="con-social-icon social-facebook"
            >
              <FaFacebook />
            </Link>
            <Link
              to={"https://twitter.com/diamondvisa"}
              className="con-social-icon social-twitter"
            >
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-section">
        <h3>Links</h3>
        <ul>
          <li><Link to="/about" className="footer-link footer-about-company">About Company</Link></li>
          <li><Link to="/team" className="footer-link footer-meet-team">Meet the Team</Link></li>
          <li><Link to="/payment-type" className="footer-link footer-payment-type">Payment Type</Link></li>
          <li><Link to="/news-media" className="footer-link footer-news-media">News & Media</Link></li>
          <li><Link to="/world-media-partner" className="footer-link footer-world-partner">World Media Partner</Link></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Visa</h3>
        {visas.map((visa) => (
          <ul
            key={visa.id}
            onClick={() => handleCardClick(visa)}
          >
            <li className="footer-link">{visa.type}</li>
          </ul>
        ))}
      </div>

      <div className="footer-section">
       <h3>Services</h3>
       {services.map((service, index) => (
          <ul key={index} >
              <li className="footer-link" onClick={() => handleClick(service)}>{service.title}</li>
          </ul>
        ))}
      </div>

      <div className="footer-section news">
        <NewsletterComponent />
      </div>

      <div className="home-footer-under-large">
        <p>
          Copyright 2024 © <b>Diamond Visa and Immigration Services</b> All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
