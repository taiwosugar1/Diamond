import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import "./VisaForm.css";
import { db, storage } from "../firebase";

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
    supportingDocuments: null,
    message: "",
    visaType: visaType || "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "supportingDocuments") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setSuccess(false);

    try {
      let documentURL = null;

      // Upload document to Firebase Storage
      if (formData.supportingDocuments) {
        const storageRef = ref(storage, `documents/${formData.supportingDocuments.name}`);
        const snapshot = await uploadBytes(storageRef, formData.supportingDocuments);
        documentURL = await getDownloadURL(snapshot.ref);
      }

      // Save form data to Firestore
      const docRef = await addDoc(collection(db, "visaApplications"), {
        ...formData,
        supportingDocuments: documentURL,
        submittedAt: new Date(),
      });

      setSuccess(true);
      alert("Application submitted successfully! Reference ID: " + docRef.id);
      setFormData({
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
            placeholder="Residential Address (Home,City, State, Country)"
          />
        </div>

        {/* Supporting Documents */}
        <div className="form-groupp">
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
      {success && <p className="success">Application submitted successfully!</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default VisaForm;
