
import React from 'react'
import "./Footer.css"
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import NewsletterComponent from './NewsletterComponent'


const Footer = () => {
  return (
    <div className='footer'>
    <div className='home-footer' style={{marginLeft:"20px"}}>

      <div className="footer-ul">
        <ul>
          <h3>ABOUT US</h3>
         <li><a href="https://wa.me/message/NL7UY3M3Q6ZOG1"> Quick chat here <FaWhatsapp/></a></li> 
          <li>Book a Flight</li>
        </ul>
        <ul className='footer-media-large-screen'>
      <Link
       to={"https://instagram.com/diamondvisa/"}><li><FaInstagram/></li></Link>
      <Link to={"https://facebook.com/diamondvisa"}><li><FaFacebook/></li></Link>
      <Link to={"https://twitter.com/diamondvisa"}><li><FaTwitter/></li></Link>
    </ul>
      </div>

      <div className="footer-ul">
        <div>
  
            <p> Contact us today to schedule a consultation and take the first step towards achieving your visa and immigration goals!</p>
        </div>
      </div>

      <div className="footer-ul">
        <ul className='visa'>
        <Link to={"https://wa.me/message/NL7UY3M3Q6ZOG1"}><h3>VISA</h3></Link>
          <li>List of Visa</li>
          <Link to={"/hotel"}><li>Available Hotel</li></Link>
          <li>Management</li>
        </ul>
      </div>
     
      
        <div className="large-screen-feedback">
          <NewsletterComponent/>
        </div>
        
        
    </div>


    <p className='home-footer-under-large'>Copyright 2024 © <b>Diamond Visa and immigration services </b>All rights reserved.</p>
    
    
    
    </div>
  )
}

export default Footer
