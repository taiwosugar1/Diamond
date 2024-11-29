
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
          <h3>DIAMOND VISA</h3>
          <Link to={"/visa"} className='vi'>List Of Visa</Link>
          <Link className='vi'>Management</Link>
        </ul>
      </div>
     
      
        <div className="large-screen-feedback">
          <NewsletterComponent/>
        </div>
        
        
    </div>

    <div className='home-footer-under-large'>
    <p>Copyright 2024 © <b>Diamond Visa and immigration services </b>All rights reserved.
    <a href="http://www.oguntoyinbo.com.ng/" style={{color:"#12e1e1"}}> Multibrand</a></p>
    </div>
    
    
    
    </div>
  )
}

export default Footer
