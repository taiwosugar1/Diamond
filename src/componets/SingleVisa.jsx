import React from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import "./SingleVisa.css"; // Ensure you have appropriate styles
import { FaMapLocation, FaPlane, FaAddressCard, FaBusinessTime, FaCoins } from "react-icons/fa6";
import { GrEmergency } from "react-icons/gr";

const SingleVisa = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get the visa data passed via state
  const { id, type, description, backgroundImage, details } = location.state;

  // Map ID to Icons
  const visaIcons = {
    1: <FaMapLocation />,
    2: <GrEmergency />,
    3: <FaPlane />,
    4: <FaAddressCard />,
    5: <FaBusinessTime />,
    6: <FaCoins />,
  };

  // Handle navigation to form
  const handleFormNavigation = () => {
    navigate("/visa-form", { state: { visaType: type } });
  };

  return (
    <div className="single-visa-container" data-aos="fade-up">
      {/* Back Link */}
      <div className="back-link">
        <Link to="/visa">
          <span>← Back to Visa Services</span>
        </Link>
      </div>

      {/* Visa Banner Section */}
      <div
        className="visa-banner"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <h1 className="visa-title">{type}</h1>
      </div>

      {/* Visa Details Section */}
      <div className="visa-details">
        <h2>About {type}</h2>
        <p>{details}</p>

        <h3>Description</h3>
        <p>{description}</p>

        {/* Visa Icon Display */}
        <div className="visa-icon-large">{visaIcons[id]}</div>

        {/* Button to Navigate to the Form */}
        <button className="button2" onClick={handleFormNavigation}>
          Apply for {type}
        </button>
      </div>
    </div>
  );
};

export default SingleVisa;
