import React from "react";
import "./Country.css";

const Country = () => {
  const countries = [
    {
        name: "Nigeria",
        flag: "https://flagcdn.com/ng.svg",
        description: "The Giant of Africa, rich in culture and diversity.",
      },
      {
        name: "Ghana",
        flag: "https://flagcdn.com/gh.svg",
        description: "The gateway to Africa with rich culture and heritage.",
      },
    {
      name: "United States",
      flag: "https://flagcdn.com/us.svg",
      description: "Land of opportunities and innovation.",
    },
    {
      name: "United Kingdom",
      flag: "https://flagcdn.com/gb.svg",
      description: "A hub of culture and history.",
    },
    {
      name: "Canada",
      flag: "https://flagcdn.com/ca.svg",
      description: "Known for its natural beauty and diversity.",
    },
    {
      name: "Australia",
      flag: "https://flagcdn.com/au.svg",
      description: "A land of adventure and scenic landscapes.",
    },
    {
      name: "Germany",
      flag: "https://flagcdn.com/de.svg",
      description: "Leading in engineering and technology.",
    },
    {
      name: "Japan",
      flag: "https://flagcdn.com/jp.svg",
      description: "Blending tradition with cutting-edge innovation.",
    },
    {
      name: "France",
      flag: "https://flagcdn.com/fr.svg",
      description: "Famous for art, cuisine, and romance.",
    },
    {
      name: "Switzerland",
      flag: "https://flagcdn.com/ch.svg",
      description: "Known for its neutrality and stunning Alps.",
    },
  ];

  return (
    <div className="countries-container">
      {countries.map((country, index) => (
        <div className="country-card" key={index}>
          <img
            src={country.flag}
            alt={`${country.name} flag`}
            className="country-flag"
          />
          <h3 className="country-name">{country.name}</h3>
          <p className="country-description">{country.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Country;
