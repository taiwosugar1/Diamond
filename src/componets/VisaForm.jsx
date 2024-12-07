import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import "./VisaForm.css";
import { db } from "../firebase";
import { FaHandsClapping } from "react-icons/fa6";

const VisaForm = () => {
  const location = useLocation();
  const { visaType } = location.state || {};
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    nationality: "",
    passportNumber: "",
    maritalStatus: "",
    address: "",
    message: "",
    visaType: visaType || "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Save form data to Firestore
      const docRef = await addDoc(collection(db, "visaApplications"), {
        ...formData,
        submittedAt: new Date(),
      });

      setShowSuccessPopup(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        dob: "",
        nationality: "",
        passportNumber: "",
        maritalStatus: "",
        address: "",
        message: "",
        visaType: visaType || "",
      });
    } catch (err) {
      setError("Failed to submit the application. Please try again.");
      console.error("Firebase Error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="visa-form-container">
      <h2 className="book-f">// Apply for {formData.visaType || "a Visa"} //</h2>
      <form onSubmit={handleSubmit}>
        {/* Visa Type */}
        <div className="form-groupp">
          <label htmlFor="visaType">Visa Type</label>
          <select
            id="visaType"
            name="visaType"
            value={formData.visaType}
            onChange={handleChange}
            className="dropdown"
            required
          >
            <option value="" disabled>
              Select Visa Type
            </option>
            <option value="Tourist Visa">Tourist Visa</option>
            <option value="Emergency Visa">Emergency Visa</option>
            <option value="K1/i-130 Visa Application">K1/i-130 Visa Application</option>
            <option value="Naija Wife / Resident Permit">Naija Wife / Resident Permit</option>
            <option value="Business Visa">Business Visa</option>
            <option value="Visa Extension">Visa Extension</option>
          </select>
        </div>

        {/* Full Name */}
        <div className="form-groupp">
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
        <div className="form-groupp">
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
        <div className="form-groupp">
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
        <div className="form-groupp">
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
        <div className="form-groupp">
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
        <div className="form-groupp">
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
        <div className="form-groupp">
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
        <div className="form-groupp">
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            rows="2"
            required
            placeholder="Residential Address (Home, City, State, Country)"
          />
        </div>

        {/* Additional Details */}
        <div className="form-groupp">
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
        <button type="submit" className="button2" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </button>
      </form>

      {showSuccessPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <span className="close-icon" onClick={() => setShowSuccessPopup(false)}>
              &times;
            </span>
            <FaHandsClapping color="brown" />
            <h2 className="h2">Application Submitted Successfully!</h2>
            <p className="success-visa">One of Our members will contact you via, Email, Phone Call or Whatsapp chat. Thanks!</p>
          </div>
        </div>
      )}

      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default VisaForm;
