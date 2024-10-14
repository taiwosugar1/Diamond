import React from 'react';
import './Hotel.css';
import { Link, useParams } from 'react-router-dom';
import { hotelList } from '../componets/hotelList';

const Hotel = () => {
  const { Id } = useParams();
  const hotel = hotelList.find((hotel) => hotel.id === parseInt(Id));

  if (!hotel) {
    return <div className="not-found">Hotel not found</div>;
  }

  return (
    <div className='single-hotel-container'>

      <hr className="divider" />

      <div className='single-hotel-detail'>
        <h1>{hotel.name}</h1>
        <div className='hotel-details-wrapper'>
          <img src={hotel.image} alt={hotel.name} className="hotel-image" />
          <div className='hotel-description'>
            <h3>About {hotel.name}</h3>
            <p>{hotel.description}</p>
            <a href="https://wa.me/message/NL7UY3M3Q6ZOG1">
              <button className="book-hotel">Book this</button>
            </a>
          </div>
        </div>
      </div>

      <div className="hotel-footer">
        <ul className="social-links">
          <li><a href="https://www.facebook.com/">Facebook</a></li>
          <li><a href="https://www.instagram.com/">Instagram</a></li>
          <li><a href="https://www.twitter.com/">Twitter</a></li>
          <li><a href="https://www.youtube.com/">YouTube</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Hotel;
