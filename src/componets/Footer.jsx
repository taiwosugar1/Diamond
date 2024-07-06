import React from 'react'
import "./Footer.css"
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
    <div className='home-footer'>

      <div className="footer-ul">
        <ul>
          <h3>ABOUT US</h3>
         <li><a href="tel: +1234567890"> Call Us</a></li> 
          <li>Book a Flight</li>
        </ul>
        <ul className='footer-media-large-screen'>
      <Link
       to={"https://instagram.com/diamondvisa/"}><li><FaInstagram/></li></Link>
      <Link to={"https://facebook.com/diamondvisa"}><li><FaFacebook/></li></Link>
      <Link to={"https://twitter.com/diamondvisa"}><li><FaTwitter/></li></Link>
      <Link to={"https://wa.me/message/NL7UY3M3Q6ZOG1"}><li><FaWhatsapp/></li></Link>
    </ul>
      </div>

      <div className="footer-ul">
        <div>
         <Link to={"contact"}><h3>CONTACT</h3></Link> 
            <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>

      <div className="footer-ul">
        <ul>
          <Link to={"wa.watsapp.com"}><h3>VISA</h3></Link>
          <li>List of Visa</li>
          <li>Visa Type</li>
          <li>Available Hotel</li>
          <li>Agent</li>
          <li>Management</li>
        </ul>
      </div>
     
      <div className="footer-ul">
        <p>   Footer Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, nihil?</p>
        <div className='footer-input-details'>
           <button>Submit</button>
           <input type="text" placeholder='Write a Feedback'/> 
        </div>
        </div>
        
    </div>


    <p className='footer-under'>Copyright 2024 @ <b>Diamond Visa</b>.</p>
    
    <div className="footer-ul-mobile">
      <a href="https://wa.me/message/NL7UY3M3Q6ZOG1"><h4>BOOK YOUR FLIGHT NOW</h4></a>
      <ul className='footer-media'>
      <Link
       to={"https://instagram.com/diamondvisa/"}><li><FaInstagram/></li></Link>
      <Link to={"https://facebook.com/diamondvisa"}><li><FaFacebook/></li></Link>
      <Link to={"https://twitter.com/diamondvisa"}><li><FaTwitter/></li></Link>
      <Link to={"https://wa.me/message/NL7UY3M3Q6ZOG1"}><li><FaWhatsapp/></li></Link>
    </ul>
        <ul>
          
          <Link to={"/about-us"}><li>ABOUT</li></Link>
          <Link><li>SERVICES</li></Link>
          <Link><li>FLIGHTS</li></Link>
          <Link to={"contact"}> <li>CONTACT</li></Link>
          <Link><li>FAQ</li></Link>
        </ul>
        <p>Copyright 2024 © <b>Diamond Visa and immigration services </b>All rights reserved.</p>
      </div>
    
    </div>
  )
}

export default Footer