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
     <hr style={{color: "white", width:"100%"}} />
     <br />

    <div className='tour-detail' >
      
      
      <h1>{country.name}</h1>
      <div className='tour-details-container'>
      <img src={country.image} alt={country.name} />

      <div  className='tour-description'>
         <p className='info'>More information about </p><h3>{country.name}</h3>
         <p className='description'>{country.description}</p>
      </div>
      </div>

    </div>
    </div>
  );
};

export default TourDetail;

