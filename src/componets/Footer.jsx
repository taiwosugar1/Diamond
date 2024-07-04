import React from 'react'
import "./Footer.css"
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
    <div className='home-footer'>
      <div className="footer-ul">
        <ul>
          <h3>LIST</h3>
          <li>LISTof it</li>
          <li>LISTof it</li>
          <li>LISTof it</li>
          <li>LISTof it</li>
          <li>LISTof it</li>
        </ul>
      </div>
      <div className="footer-ul">
        <ul>
          <h3>LIST</h3>
          <li>LISTof it</li>
          <li>LISTof it</li>
          <li>LISTof it</li>
          <li>LISTof it</li>
          <li>LISTof it</li>
        </ul>
      </div>
      <div className="footer-ul">
        <ul>
          <h3>LIST</h3>
          <li>LISTof it</li>
          <li>LISTof it</li>
          <li>LISTof it</li>
          <li>LISTof it</li>
          <li>LISTof it</li>
        </ul>
      </div>
     
      <div className="footer-ul">
        <p>   Footer Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, nihil?</p>
       <button>Submit</button>
        <input type="text" placeholder='Write a Feedback'/> 
        </div>
      

   
    </div>
    <div className="footer-ul-mobile">
      <h4>BOOK YOUR FLIGHT NOW</h4>
      <ul className='footer-media'>
      <Link
       to={"https://instagram.com/diamondvisa/"}><li><FaInstagram/></li></Link>
      <Link to={"https://facebook.com/diamondvisa"}><li><FaFacebook/></li></Link>
      <Link to={"(link unavailable)"}><li><FaTwitter/></li></Link>
    </ul>
        <ul>
          
          <Link to={"/about-us"}><li>ABOUT</li></Link>
          <Link><li>SERVICES</li></Link>
          <Link><li>FLIGHTS</li></Link>
          <Link> <li>CONTACT</li></Link>
          <Link><li>FAQ</li></Link>
        </ul>
        <p>Copyright 2024 @ <b>Diamond Visa</b>.</p>
      </div>
    </div>
  )
}

export default Footer