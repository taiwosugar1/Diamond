import React from "react";
import "./Contact1.css";
import Contact from "./Contact";
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'

const Contact1 = () => {
  return (
    <div className="contact-page">
      {/* Header Section */}
      <header className="contact-header">
        <p>We’re here to assist you. Reach out to us!</p>
      </header>

      <div className="contact-banner">
        <div className="overlay">
          <h1>Contact Us</h1>
        </div>
      </div>

      {/* Contact Details and Map */}
      <div className="contact-container">

        {/* Contact Form */}
        <div className="content-box">

      </div>

        <div className="contact-form">
         <Contact/>
        </div>

        {/* Contact Details */}
        <div className="contact-details">
        
       
        <p className="abbout-title">// Need any help? //</p>
        <h2 className="abbout-heading">
        Feel free to reach out to us via the details below.
        </h2>
        <p className='dessc'>Our expert consultants evaluate your eligibility and guide you through the most suitable visa options based on your qualifications, skills, and other eligibility</p>

          <ul className="contact-info">
            <li>
              <strong>Phone:</strong> +1 (614) 707 6245
            </li>
            <li>
              <strong>Email:</strong> diamondvisa@gmail.com
            </li>
            <li>
              <strong>Address:</strong> 512 Main St, Anytown, USA
            </li>
          </ul>
          <div className="social-media">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebook/>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FaTwitter/>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram/>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Map */}
      <div className="map-container">
        <h2>Our Location</h2>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509005!2d-122.4205817846814!3d37.77492977975938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085814e5f2a8e5b%3A0xc5b62e2b57b1a54f!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2sin!4v1614360049001!5m2!1sen!2sin"
          width="100%"
          height="300"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact1;
