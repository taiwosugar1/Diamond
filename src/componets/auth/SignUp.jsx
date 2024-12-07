import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../../firebase";
import { db } from "../../firebase"; // Import Firestore instance
import { setDoc, doc } from "firebase/firestore"; // Import Firestore methods
import { Link } from "react-router-dom";
import countryList from "../array/countryList";

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
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      // Create a new user
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      // Send email verification
      const user = userCredential.user;
      await sendEmailVerification(user);

      // Save user information to Firestore
      await setDoc(doc(db, "users", user.uid), {
        fullName: formData.fullName,
        age: formData.age,
        address: formData.address,
        country: formData.country,
        occupation: formData.occupation,
        maritalStatus: formData.maritalStatus,
        email: formData.email,
        role: "user", // Assign default role
        createdAt: new Date().toISOString(), // Optional: track account creation
      });

      setMessage(
        "Signup successful! A verification email has been sent to your email address. Please verify your email to complete the registration process."
      );

      // Clear the form
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
      <h2 className="book-f">// Signup //</h2>
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
            {countryList.map((country, index) => (
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
      {message && <p className="success">{message}</p>}
    </div>
  );
};

export default Signup;
