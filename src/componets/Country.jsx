import React from "react";
import { Link } from "react-router-dom";
import "./Country.css";
import countries from "./array/countries";



const Country = () => {
  return (
    <div className="countries-container">
      {countries.map((country) => (
        <Link to={`/country/${country.id}`} className="country-link" key={country.id}>
          <div className="country-card" data-aos="flip-left">
            <img
              src={country.flag}
              alt={`${country.name} flag`}
              className="country-flag"
            />
            <h3 className="country-name">{country.name}</h3>
            <p className="country-description">{country.descriptions[0]}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Country;
