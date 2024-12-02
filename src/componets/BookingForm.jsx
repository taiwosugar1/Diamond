import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./BookingForm.css"; // External CSS

const BookingForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    country: "",
    time: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS logic
    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        formData,
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          setMessage("Booking successfully submitted!");
          setFormData({ fullName: "", phone: "", email: "", country: "", time: "" });
        },
        (error) => {
          console.error("Failed to send email:", error);
          setMessage("An error occurred. Please try again.");
        }
      );
  };

  return (
    <div className="booking-form-container">
      <form className="booking-form" onSubmit={handleSubmit}>
        <p className="book-f">// BOOKING FORM //</p>
        <h2 className="form-title">Book Your Appointment</h2>

        <div className="form-group">
          
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="form-group">
         
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div className="form-group">
          
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
         
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select Country
            </option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            <option value="Nigeria">Nigeria</option>
            <option value="India">India</option>
            <option value="Australia">Australia</option>
            <option value="Germany">Germany</option>
            <option value="China">China</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="time">Preferred Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="form-button">
          Submit Booking
        </button>

        {message && <p className="form-message">{message}</p>}
      </form>
    </div>
  );
};

export default BookingForm;
