import React from 'react';
import './ContactInfo.css';  // Assuming you're styling with an external CSS file
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';

const ContactInfo = () => {
  return (
    <section className="contact-container">
      <div className="contact-section logo">
        <img src="/images/logo.png" alt="Logo" className="logo-image" /> {/* Add your logo path */}
      </div>
      <div className="contact-section">
        <p>Phone:</p>
        <a href='tel: +1-614-707-6245' >
                 <div >
                    <h4 style={{color: "white"}}>tel: +1 614 707 6245</h4>
                </div> </a>
      </div>
      <div className="contact-section">
        <p>Email:</p>
        <p>Diamondimmigrationservices@gmail.com</p>
      </div>
      <div className="contact-section">
        <p>Address:</p>
        <p>30 Broklyn Street. USA</p>
      </div>
      <div className="contact-section contact-button">
        <Link to={"/contact"} className="button1">
          Contact Us
        </Link>
      </div>
     
      
    </section>
  );
};

export default ContactInfo;
