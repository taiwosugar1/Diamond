import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import "./auth.css"
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      setEmail("");
      setPassword("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="visa-form-container" style={{justifyContent:"center", alignItems:"center", display:"flex"}}>

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
        
        <button type="submit" className="button1">Login</button>
        <Link className="have-account" to={"/reset"} color="#007bff">
          Forgot Password
        </Link>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Login;
