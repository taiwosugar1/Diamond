import React, { createContext, useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const logout = async () => {
    try {
      await signOut(auth); // Firebase sign out
      setCurrentUser(null); // Clear user state after logout
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ currentUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
