import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import "./AdminDashboard.css";
import { useAuth } from "../../AuthContext";

const AdminDashboard = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { currentUser } = useAuth(); // Assume this provides currentUser object
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const docRef = collection(db, "users");
        const querySnapshot = await getDocs(docRef);
        const user = querySnapshot.docs
          .map((doc) => ({ id: doc.id, ...doc.data() }))
          .find((user) => user.id === currentUser?.uid);
        
        if (user?.role === "admin") {
          setIsAdmin(true);
        } else {
          setError("Access denied. You are not authorized to view this page.");
        }
      } catch (err) {
        setError("Failed to verify user role.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserRole();
  }, [currentUser]);

  useEffect(() => {
    if (isAdmin) {
      const fetchApplications = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, "visaApplications"));
          const data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setApplications(data);
        } catch (err) {
          setError("Failed to load applications. Please try again.");
          console.error(err);
        }
      };

      fetchApplications();
    }
  }, [isAdmin]);

  if (!currentUser) {
    return <p>You must log in to access this page.</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="applications-list">
        {applications.map((app) => (
          <div key={app.id} className="application-card">
            <h3>{app.name}</h3>
            <p><strong>Email:</strong> {app.email}</p>
            <p><strong>Phone:</strong> {app.phone}</p>
            <p><strong>Visa Type:</strong> {app.visaType}</p>
            <p><strong>Message:</strong> {app.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
