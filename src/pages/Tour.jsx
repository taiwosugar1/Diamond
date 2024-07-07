import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Tour.css';
import { countryList } from '../componets/countryList';

const TourDetail = () => {
  const { id } = useParams();
  const country = countryList.find((countryList) => countryList.id === id);
  
 
  if (!country) {
    return <div>Tour not found</div>;
  }

  return (
     <div className='tour-page'>
     <div className="tour-button">
       <Link to={"/tourList"}> <button>Back to Tour</button></Link>
       <Link to={"/"}> <button>Home</button></Link>
       <Link to={"/about-us"}> <button>About</button></Link>
     </div>

    <div className='tour-detail' >
      
      
      <h2>{country.name}</h2>
      <img src={country.image} alt={country.name} />
      <p>More information about {country.name}</p>
      <p>{country.description}</p>

    </div>
    </div>
  );
};

export default TourDetail;

