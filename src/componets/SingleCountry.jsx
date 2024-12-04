import React from "react";
import { useParams, Link } from "react-router-dom";
import "./SingleCountry.css";
import countries from "./array/countries";

const SingleCountry = () => {
  const { id } = useParams();
  const country = countries.find((country) => country.id === parseInt(id));

  if (!country) {
    return <p>Country not found</p>;
  }

  return (
    <div className="single-country-container">
      <div className="single-country-header">
        <img src={country.flag} alt={`${country.name} flag`} className="single-country-flag" />
        <h2 className="abbout-heading">{country.name}</h2>
      </div>

      <div className="single-country-content">
        <div className="single-country-images">
          {country.images.map((image, index) => (
            <div key={index} className="single-country-image-container">
              <img
                data-aos="zoom-in"
                src={image.url}
                alt={`${country.name} Image ${index + 1}`}
                className="single-country-image"
              />
              <p className="image-place-name abbout-title">{image.placeName}</p>
            </div>
          ))}
        </div>

        <div className="single-country-details">
          <h3 className="abbout-title">// Country Descriptions //</h3>
          <ul>
            {country.descriptions.map((desc, index) => (
              <li key={index} className="dessc">{desc}</li>
            ))}
          </ul>

          <h3 className="abbout-heading">Visa Types</h3>
          <ul>
            {country.visaTypes.map((visa, index) => (
              <li key={index}>
                <Link to="/visa" className="visa-link" >
                  {visa}
                </Link>
              </li>
            ))}
          </ul>

          <h3 className="abbout-title">Visa-Free Information</h3>
          <p>{country.visaFree}</p> 
           <Link className="button2" >
             Click here to Apply for a Visa
           </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCountry;
