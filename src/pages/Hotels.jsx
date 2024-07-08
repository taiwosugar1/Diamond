import React, { useState, useEffect } from 'react';
import "./Hotels.css";
import { hotelList } from '../componets/hotelList.js';
import { Link } from 'react-router-dom';

const Hotel = ({ filteredCategory }) => {
  const [filteredHotels, setFilteredHotels] = useState(hotelList);

  useEffect(() => {
    if (filteredCategory) {
      setFilteredHotels(hotelList.filter(hotel => hotel.category === filteredCategory));
    } else {
      setFilteredHotels(hotelList);
    }
  }, [filteredCategory]);

  return (
    <div className='hotel-list'>
      <div className="tour-button">
        <Link to={"/tourList"}> <button>Back to Tour</button></Link>
        <Link to={"/"}> <button>Home</button></Link>
        <Link to={"/about-us"}> <button>About</button></Link>
      </div>
       <hr style={{color: "white", width:"100%"}} />
       <br />

      <h1>List Of Hotels</h1>
      <div className="hotel-container">
        {filteredHotels.map((hotel, index) => (
          <div key={index} className="hotel-box">
            <img src={hotel.image} alt="" />
            <div>
              <h4> {hotel.name}</h4>
              <p>Location: <h4 style={{color:"blueviolet"}}>{hotel.location}</h4></p>
              <Link to={`/hotel/${hotel.id}`}><button className='view-hotel'>View more details</button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotel;