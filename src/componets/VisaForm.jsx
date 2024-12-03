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
    dob: "",
    nationality: "",
    passportNumber: "",
    maritalStatus: "",
    address: "",
    supportingDocuments: null,
    message: "",
    visaType: visaType || "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "supportingDocuments") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement submission logic here (e.g., EmailJS or API request)
    console.log(formData);
    alert(`Application for ${formData.visaType} submitted successfully!`);
  };

  return (
    <div className="visa-form-container">
      <h2>Apply for {formData.visaType || "a Visa"}</h2>
      <form onSubmit={handleSubmit}>
        {/* Visa Type */}
        <div className="form-group">
          <label htmlFor="visaType">Visa Type</label>
          <select
            id="visaType"
            name="visaType"
            value={formData.visaType}
            onChange={handleChange}
            className="dropdown"
            required
          >
            <option value="" disabled>Select Visa Type</option>
            <option value="Tourist Visa">Tourist Visa</option>
            <option value="Emergency Visa">Emergency Visa</option>
            <option value="K1/i-130 Visa Application">K1/i-130 Visa Application</option>
            <option value="Naija Wife / Resident Permit">Naija Wife / Resident Permit</option>
            <option value="Business Visa">Business Visa</option>
            <option value="Visa Extension">Visa Extension</option>
          </select>
        </div>

        {/* Full Name */}
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

        {/* Email */}
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

        {/* Phone */}
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

        {/* Date of Birth */}
        <div className="form-group">
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>

        {/* Nationality */}
        <div className="form-group">
          <input
            type="text"
            id="nationality"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            required
            placeholder="Nationality"
          />
        </div>

        {/* Passport Number */}
        <div className="form-group">
          <input
            type="text"
            id="passportNumber"
            name="passportNumber"
            value={formData.passportNumber}
            onChange={handleChange}
            required
            placeholder="Passport Number"
          />
        </div>

        {/* Marital Status */}
        <div className="form-group">
          <select
            id="maritalStatus"
            name="maritalStatus"
            value={formData.maritalStatus}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select Marital Status</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
            <option value="Widowed">Widowed</option>
          </select>
        </div>

        {/* Address */}
        <div className="form-group">
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            rows="2"
            required
            placeholder="Residential Address (Home,City, State, Country)"
          />
        </div>

        {/* Supporting Documents */}
        <div className="form-group">
          <label htmlFor="supportingDocuments">Upload Your Passport Front Page</label>
          <input
            type="file"
            id="supportingDocuments"
            name="supportingDocuments"
            onChange={handleChange}
            accept=".pdf,.jpg,.jpeg,.png"
            required
          />
        </div>

        {/* Additional Details */}
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

        {/* Submit Button */}
        <button type="submit" className="submit-button">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default VisaForm;