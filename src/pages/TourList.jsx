import React from 'react'
import { Link } from 'react-router-dom';
import "./TourList.css"
import { countryList } from '../componets/countryList.js';

const TourList = () => {
  return (
    <div className='tour'>
    <div className="tour-button">
     <Link to={"/"}> <button>Home</button></Link>
     <Link to={"/about-us"}> <button>About</button></Link>
     </div>

     <div className="tour-container">
      {countryList.map(( country, index) =>(
         <div key={index} className="tour-box">
           <img src={country.image} alt="" />
          
         <div>
           <h3>country:</h3> <p>{country.name}</p>
           <Link to={`/tour/${country.id} `}><p className='view'>view</p></Link>
          
         </div>
       

       </div>
      ))}
      
     </div>


    </div>
  )
}

export default TourList
