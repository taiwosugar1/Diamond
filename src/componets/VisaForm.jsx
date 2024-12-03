import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./VisaForm.css";

const VisaForm = () => {
  const location = useLocation();
  const { visaType } = location.state || {}; // Get the visa type passed from SingleVisa
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    visaType: visaType || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement email submission here (e.g., using EmailJS or your API)
    alert(`Application for ${formData.visaType} submitted successfully!`);
  };

  return (
    <div className="visa-form-container">
      <h2>Apply for {formData.visaType || "a Visa"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="visaType" className="abbout-title">// Visa Type //</label>
          <select
            id="visaType"
            name="visaType"
            value={formData.visaType}
            onChange={handleChange}
            className="dropdown"
            required
          >
            <option value="" disabled style={{color:"#ff0000", background:"white"}}>
              Select Visa Type
            </option>
            <option value="Tourist Visa">Tourist Visa</option>
            <option value="Emergency Visa">Emergency Visa</option>
            <option value="K1/i-130 Visa Application">
              K1/i-130 Visa Application
            </option>
            <option value="Naija Wife / Resident Permit">
              Naija Wife / Resident Permit
            </option>
            <option value="Business Visa">Business Visa</option>
            <option value="Visa Extension">Visa Extension</option>
          </select>
        </div>

        <div className="form-group">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Full Name"
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email Address"
          />
        </div>

        <div className="form-group">
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Phone Number"
          />
        </div>

        <div className="form-group">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder="Enter any additional details..."
          />
        </div>

        <button type="submit" className="submit-button">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default VisaForm;
