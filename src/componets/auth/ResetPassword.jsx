import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent! Check your inbox.");
      setError("");
      setEmail("");
    } catch (err) {
      setError(err.message);
      setMessage("");
    }
  };

  return (
    <div className="visa-form-container">
      <h2>Reset Password</h2>
      <form onSubmit={handleResetPassword}>
        <div className="form-groupp">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="button1">Send Reset Email</button>
        <Link className="have-account" to={"/login"} color="#007bff">
          Back to Login
        </Link>
      </form>
      {message && <p className="success">{message}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default ResetPassword;
