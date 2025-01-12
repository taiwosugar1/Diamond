import React from 'react';
import './ContactInfo.css'; 
import { Link } from 'react-router-dom';

const ContactInfo = () => {
  return (
    <section className="contact-container">
      <div className="contact-section logo">
        <img src="/images/logo.png" alt="Logo" className="logo-image" />
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
        <a href="mailto:Diamondimmigrationservices444@gmail.com">
         <p>Diamondimmigrationservices444@gmail.com</p>
        </a>
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
