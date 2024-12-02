import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import NewsletterComponent from './NewsletterComponent';

const Footer = () => {
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
          <li><Link to="/about-company" className="footer-link footer-about-company">About Company</Link></li>
          <li><Link to="/meet-the-team" className="footer-link footer-meet-team">Meet the Team</Link></li>
          <li><Link to="/payment-type" className="footer-link footer-payment-type">Payment Type</Link></li>
          <li><Link to="/news-media" className="footer-link footer-news-media">News & Media</Link></li>
          <li><Link to="/world-media-partner" className="footer-link footer-world-partner">World Media Partner</Link></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Visa</h3>
        <ul>
          <li><Link to="/student-visa" className="footer-link footer-student-visa">Student Visa</Link></li>
          <li><Link to="/family-visa" className="footer-link footer-family-visa">Family Visa</Link></li>
          <li><Link to="/tourist-visa" className="footer-link footer-tourist-visa">Tourist Visa</Link></li>
          <li><Link to="/business-visa" className="footer-link footer-business-visa">Business Visa</Link></li>
          <li><Link to="/diplomatic-visa" className="footer-link footer-diplomatic-visa">Diplomatic Visa</Link></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Services</h3>
        <ul>
          <li><Link to="/ielts-coaching" className="footer-link footer-ielts-coaching">IELTS Coaching</Link></li>
          <li><Link to="/toefl-coaching" className="footer-link footer-toefl-coaching">TOEFL Coaching</Link></li>
          <li><Link to="/gre-coaching" className="footer-link footer-gre-coaching">GRE Coaching</Link></li>
          <li><Link to="/gmat-coaching" className="footer-link footer-gmat-coaching">GMAT Coaching</Link></li>
          <li><Link to="/sat-coaching" className="footer-link footer-sat-coaching">SAT Coaching</Link></li>
        </ul>
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
