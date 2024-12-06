import React, { useState } from "react";
import { signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../../firebase";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [resendMessage, setResendMessage] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Reset error state
    setResendMessage(""); // Reset resend message state

    try {
      // Attempt to sign in the user
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Strictly enforce email verification
      if (!user.emailVerified) {
        // Sign out the user immediately if email is not verified
        await auth.signOut();
        setError("Email not verified. Please check your email inbox for the verification link.");
        return;
      }

      // If email is verified, allow login
      alert("Login successful!");
      navigate("/"); // Navigate to home page
      setEmail(""); // Clear input fields
      setPassword("");
    } catch (err) {
      setError(err.message);
    }
  };

  const resendVerificationEmail = async () => {
    setResendMessage("");
    setError("");

    try {
      // Send verification email to the provided email
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (!user.emailVerified) {
        await sendEmailVerification(user);
        setResendMessage(<div style={{color:"white"}}>Verification email sent! Please check your inbox.</div>);
      } else {
        setResendMessage(<div style={{color:"white"}}>Your email is already verified. You can log in."</div>);
      }
    } catch (err) {
      setError(<div style={{color:"#ff0000"}}>Unable to resend verification email. Make sure the credentials are correct.</div>);
    }
  };

  return (
    <div
      className="visa-form-container"
      style={{ justifyContent: "center", alignItems: "center", display: "flex" }}
    >
      <Link className="have-account" to={"/signup"} color="#007bff">
        Don't have an account? Signup Here
      </Link>

      <h2 className="book-f">// Login //</h2>
      <form onSubmit={handleLogin}>
        <div className="form-groupp">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-groupp">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="button1">
          Login
        </button>
        <Link className="have-account" to={"/reset"} color="#007bff">
          Forgot Password
        </Link>
      </form>

      {error && (
        <div className="error">
          <p>{error}</p>
          <button onClick={resendVerificationEmail} className="button1" >
            Resend Verification Email
          </button>
        </div>
      )}
      {resendMessage && <p className="success">{resendMessage}</p>}
    </div>
  );
};

export default Login;
