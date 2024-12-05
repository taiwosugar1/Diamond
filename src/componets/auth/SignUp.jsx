import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    address: "",
    country: "",
    occupation: "",
    maritalStatus: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      alert("Signup successful!");
      setFormData({
        fullName: "",
        age: "",
        address: "",
        country: "",
        occupation: "",
        maritalStatus: "",
        email: "",
        password: "",
      });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="visa-form-container">
        <Link className="have-account" to={"/login"} color="#007bff">
          Already have an account? Login Here
        </Link>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <div className="form-groupp">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-groupp">
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-groupp">
          <input
            type="text"
            name="address"
            placeholder="Residential Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-groupp">
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select Country of Origin
            </option>
            {[
              "Afghanistan",
              "Albania",
              "Algeria",
              "Andorra",
              "Angola",
              "Argentina",
              "Armenia",
              "Australia",
              "Austria",
              "Azerbaijan",
              "Bahamas",
              "Bahrain",
              "Bangladesh",
              "Barbados",
              "Belarus",
              "Belgium",
              "Belize",
              "Benin",
              "Bhutan",
              "Bolivia",
              "Bosnia and Herzegovina",
              "Botswana",
              "Brazil",
              "Brunei",
              "Bulgaria",
              "Burkina Faso",
              "Burundi",
              "Cambodia",
              "Cameroon",
              "Canada",
              "Cape Verde",
              "Central African Republic",
              "Chad",
              "Chile",
              "China",
              "Colombia",
              "Comoros",
              "Congo",
              "Costa Rica",
              "Croatia",
              "Cuba",
              "Cyprus",
              "Czech Republic",
              "Denmark",
              "Djibouti",
              "Dominica",
              "Dominican Republic",
              "East Timor",
              "Ecuador",
              "Egypt",
              "El Salvador",
              "Equatorial Guinea",
              "Eritrea",
              "Estonia",
              "Eswatini",
              "Ethiopia",
              "Fiji",
              "Finland",
              "France",
              "Gabon",
              "Gambia",
              "Georgia",
              "Germany",
              "Ghana",
              "Greece",
              "Grenada",
              "Guatemala",
              "Guinea",
              "Guinea-Bissau",
              "Guyana",
              "Haiti",
              "Honduras",
              "Hungary",
              "Iceland",
              "India",
              "Indonesia",
              "Iran",
              "Iraq",
              "Ireland",
              "Israel",
              "Italy",
              "Ivory Coast",
              "Jamaica",
              "Japan",
              "Jordan",
              "Kazakhstan",
              "Kenya",
              "Kiribati",
              "Kosovo",
              "Kuwait",
              "Kyrgyzstan",
              "Laos",
              "Latvia",
              "Lebanon",
              "Lesotho",
              "Liberia",
              "Libya",
              "Liechtenstein",
              "Lithuania",
              "Luxembourg",
              "Madagascar",
              "Malawi",
              "Malaysia",
              "Maldives",
              "Mali",
              "Malta",
              "Marshall Islands",
              "Mauritania",
              "Mauritius",
              "Mexico",
              "Micronesia",
              "Moldova",
              "Monaco",
              "Mongolia",
              "Montenegro",
              "Morocco",
              "Mozambique",
              "Myanmar",
              "Namibia",
              "Nauru",
              "Nepal",
              "Netherlands",
              "New Zealand",
              "Nicaragua",
              "Niger",
              "Nigeria",
              "North Korea",
              "North Macedonia",
              "Norway",
              "Oman",
              "Pakistan",
              "Palau",
              "Palestine",
              "Panama",
              "Papua New Guinea",
              "Paraguay",
              "Peru",
              "Philippines",
              "Poland",
              "Portugal",
              "Qatar",
              "Romania",
              "Russia",
              "Rwanda",
              "Saint Kitts and Nevis",
              "Saint Lucia",
              "Saint Vincent and the Grenadines",
              "Samoa",
              "San Marino",
              "Sao Tome and Principe",
              "Saudi Arabia",
              "Senegal",
              "Serbia",
              "Seychelles",
              "Sierra Leone",
              "Singapore",
              "Slovakia",
              "Slovenia",
              "Solomon Islands",
              "Somalia",
              "South Africa",
              "South Korea",
              "South Sudan",
              "Spain",
              "Sri Lanka",
              "Sudan",
              "Suriname",
              "Sweden",
              "Switzerland",
              "Syria",
              "Taiwan",
              "Tajikistan",
              "Tanzania",
              "Thailand",
              "Togo",
              "Tonga",
              "Trinidad and Tobago",
              "Tunisia",
              "Turkey",
              "Turkmenistan",
              "Tuvalu",
              "Uganda",
              "Ukraine",
              "United Arab Emirates",
              "United Kingdom",
              "United States",
              "Uruguay",
              "Uzbekistan",
              "Vanuatu",
              "Vatican City",
              "Venezuela",
              "Vietnam",
              "Yemen",
              "Zambia",
              "Zimbabwe",
            ].map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        <div className="form-groupp">
          <input
            type="text"
            name="occupation"
            placeholder="Occupation"
            value={formData.occupation}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-groupp">
          <select
            name="maritalStatus"
            value={formData.maritalStatus}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select Marital Status
            </option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
            <option value="Widowed">Widowed</option>
          </select>
        </div>

        <div className="form-groupp">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-groupp">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="button1">
          Sign Up
        </button>
        
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Signup;
