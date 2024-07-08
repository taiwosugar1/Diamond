import React from 'react'
import "./Hotel.css"
import { hotelList } from '../componets/hotelList.js';
import { Link, useParams } from 'react-router-dom';

const Hotel = () => {
  const { Id } = useParams();
  const hotel = hotelList.find((hotelList) => hotelList.Id === Id);
  
 
  if (!hotel) {
    return <div>Hotel not found</div>;
  }
  return (
    <div>
      <div className="tour-button">
       <Link to={"/hotels"}> <button>Back to Hotels</button></Link>
       <Link to={"/"}> <button>Home</button></Link>
       <Link to={"/about-us"}> <button>About</button></Link>
     </div>
       <div className='tour-detail' >
      
      
      <h1>{hotel.name}</h1>
      <div className='tour-details-container'>
      <img src={hotel.image} alt={hotel.name} />

      <div  className='tour-description'>
         <p className='info'>More information about </p><h3>{hotel.name}</h3>
         <p className='description'>{hotel.description}</p>
         <Link to={"https://wa.me/message/NL7UY3M3Q6ZOG1"}><button className="book-button">Book this</button></Link>
      </div>
      </div>

    </div>
    </div>
  )
}

export default Hotel