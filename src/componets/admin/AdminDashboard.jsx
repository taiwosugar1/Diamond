import React, { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import "./AdminDashboard.css";
import { useAuth } from "../../AuthContext";

const AdminDashboard = () => {
  const [applications, setApplications] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { currentUser } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const [showApplications, setShowApplications] = useState(false);
  const [showUsers, setShowUsers] = useState(false);

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
    const fetchData = async () => {
      try {
        const applicationsSnapshot = await getDocs(collection(db, "visaApplications"));
        const applicationsData = applicationsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setApplications(applicationsData);

        const usersSnapshot = await getDocs(collection(db, "users"));
        const usersData = usersSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(usersData);
      } catch (err) {
        setError("Failed to load data. Please try again.");
        console.error(err);
      }
    };

    if (isAdmin) {
      fetchData();
    }
  }, [isAdmin]);

  const deleteApplication = async (id) => {
    try {
      await deleteDoc(doc(db, "visaApplications", id));
      setApplications((prev) => prev.filter((app) => app.id !== id));
    } catch (err) {
      setError("Failed to delete application.");
      console.error(err);
    }
  };

  const deleteUser = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
      setUsers((prev) => prev.filter((user) => user.id !== id));
    } catch (err) {
      setError("Failed to delete user.");
      console.error(err);
    }
  };

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

      {/* Visa Applications Section */}
      <div className="section">
        <button
          className="toggle-button"
          onClick={() => setShowApplications(!showApplications)}
        >
          {showApplications ? "Close Visa Applications" : "Open Visa Applications"}
        </button>
        {showApplications && (
          <div className="applications-list">
            {applications.map((app) => (
              <div key={app.id} className="application-card">
                <h3>{app.name}</h3>
                <p><strong>Email:</strong> {app.email}</p>
                <p><strong>Phone:</strong> {app.phone}</p>
                <p><strong>Visa Type:</strong> {app.visaType}</p>
                <p><strong>Message:</strong> {app.message}</p>
                <p><strong>Nationality:</strong> {app.nationality}</p>
                <p><strong>Passport No:</strong> {app.passportNumber}</p>
                <p><strong>Marital Status:</strong> {app.maritalStatus}</p>
                <p><strong>Date of birth:</strong> {app.dob}</p>
                <p><strong>Address:</strong> {app.address}</p>
                <button
                  className="delete-button"
                  onClick={() => deleteApplication(app.id)}
                >
                  Delete Application
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Registered Users Section */}
      <div className="section">
        <button
          className="toggle-button"
          onClick={() => setShowUsers(!showUsers)}
        >
          {showUsers ? "Close Registered Users" : "Open Registered Users"}
        </button>
        {showUsers && (
          <div className="users-list">
            {users.map((user) => (
              <div key={user.id} className="user-card">
                <h3>{user.fullName || "No Name Provided"}</h3>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Role:</strong> {user.role}</p>
                <button
                  className="delete-button"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete User
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
