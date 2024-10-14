import React, { useEffect, useState } from 'react';
import './Background.css'

// import { FaCalendar, FaFolder, FaInstagram, FaMoon,  FaSearch,  FaShoppingBag, FaTag, FaTwitter, FaYoutube } from "react-icons/fa";

import backgroundVideo from '../Asset/backgroundVideo.mp4'

const Background = () => {
  const [imageIndex, setImageIndex] = useState(0);

  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % 3);
      // 3 is the number of titles
    }, 5000);
     // 4000ms = 4 seconds

    return () => clearInterval(intervalId);
  }, []);
   
  return (
    <div className='bg-home'>
      
      <div className="background-video">
      <video autoPlay muted loop playsInline>
      
        <source src={backgroundVideo} type="video/mp4" />
        
      </video>
     

      <div className='overlay'>
      
      
      <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>


      <div className="hero-container">
      <div className='hero'>
        
       
        <h1>Discover the Joy of <br/> Travel with Diamond <br/> Visa and Immigration Services</h1>
        <div className='tags' >
          
          
            <p>TRAVEL AND TOURISM</p>
        </div>
        <p>Our job is to make Your Travel Easy, Fun, Convinient without any hassle </p>

        </div>
      <div className='heroBox'> 
         
         
             {[
              <img src="images/immigration.jpg" alt=""   key="title1" />,
              <img src="images/plane2.jpg" alt=""   key="title2" />,
              <img src="images/hotel.jpg" alt=""   key="title3" />,
             ][imageIndex]}
              
      </div>
      </div>
      </div>
      </div>
      
    </div>
    </div>
  )
}

export default Background
