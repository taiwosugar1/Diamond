import React, { useContext, useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import "./UserProfile.css"; // Create a CSS file for styling
import { db } from "../firebase";
import { AuthContext } from "../AuthContext";

const UserProfile = () => {
  const { currentUser } = useContext(AuthContext); // Get logged-in user
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (currentUser) {
        try {
          const userDoc = await getDoc(doc(db, "users", currentUser.uid)); // Fetch user data from Firestore
          if (userDoc.exists()) {
            setUserData(userDoc.data());
          } else {
            console.error("User document does not exist!");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, [currentUser]);

  if (!currentUser) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div className="user-profile">
      <h2>Welcome, {userData?.name || "User"}!</h2>
      <div className="profile-details">
        <p><strong>Email:</strong> {currentUser.email}</p>
        <p><strong>Name:</strong> {userData?.fullName || "Not Provided"}</p>
        <p><strong>Age:</strong> {userData?.age || "Not Provided"}</p>
        <p><strong>Phone Number:</strong> {userData?.phone || "Not Provided"}</p>
        <p><strong>Address:</strong> {userData?.address || "Not Provided"}</p>
        {/* Add other user fields as necessary */}
      </div>
    </div>
  );
};

export default UserProfile;
