import React from 'react'
import "./Hotels.css";
import { hotelList } from '../componets/hotelList.js';
import { Link } from 'react-router-dom';

const Hotel = () => {

  return (
    <div className='hotel-list'>
       <div className="tour-button">
       <Link to={"/tourList"}> <button>Back to Tour</button></Link>
       <Link to={"/"}> <button>Home</button></Link>
       <Link to={"/about-us"}> <button>About</button></Link>
     </div>

     
        <h1>List Of Hotels</h1>
        <div className="hotel-container">
            {hotelList.map((hotel, index)=>(
              <div key={index} className="hotel-box">
              <img src={hotel.image} alt="" />
              
              <div>
                <h3>Name: <span>{hotel.name}</span></h3>
                <h3>Location: <span>{hotel.location}</span></h3>
                <Link to={`/hotel/${hotel.id} `}><button className='view-hotel'>View more details</button></Link>
              </div>
             </div>
            ))};
            
            
        </div>.
    </div>
  )
}

export default Hotel