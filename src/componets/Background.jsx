import React from 'react';
import './Background.css'

// import { FaCalendar, FaFolder, FaInstagram, FaMoon,  FaSearch,  FaShoppingBag, FaTag, FaTwitter, FaYoutube } from "react-icons/fa";

import backgroundVideo from '../Asset/backgroundVideo.mp4'







const Background = () => {
   
  return (
    <div>
      
      <div className="background-video">
      <video autoPlay muted loop playsInline>
      
        <source src={backgroundVideo} type="video/mp4" />
        
      </video>
     

      <div className='overlay'>
      
      
      <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
      
      <div className='hero'>
       
        <h1>The joy of using<br/> the Diamond Visa and <br /> Immigration Services</h1>
        <div className='tags' >
          
            <p>SEASON 1</p>
            <div className="datch"></div>
         
            <p>SEP 3, 2023</p>
            <div className="datch"></div>
          
            <p>TRAVEL AND TOURISM</p>
        </div>
        <p>Our job is to make Your Travel Easy, Fun, Convinient without any hassle </p>

        </div>
      <div className='heroBox'> 
        
      </div>
      </div>
      </div>
      
    </div>
    </div>
  )
}

export default Background
