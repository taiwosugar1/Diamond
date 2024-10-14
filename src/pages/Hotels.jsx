import React, { useState, useEffect } from 'react';
import './Hotels.css';
import { Link } from 'react-router-dom';
import { hotelList } from '../componets/hotelList';

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

      <hr className="divider" />
      
      <h1>List of Hotels</h1>

      <div className="hotel-container">
        {filteredHotels.map((hotel) => (
          <div key={hotel.id} className="hotel-box">
            <img src={hotel.image} alt={hotel.name} />
            <div className="hotel-details">
              <h4>{hotel.name}</h4>
              <p>Location: <span className="hotel-location">{hotel.location}</span></p>
              <Link to={`/hotel/${hotel.id}`}>
                <button className='view-hotel'>View more details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotel;
