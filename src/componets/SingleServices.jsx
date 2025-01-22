import React from "react";
import { useParams, Link } from "react-router-dom";
import services from "./array/services";
import "./SingleService.css";

const SingleService = () => {
  const { serviceId } = useParams(); // Get the service ID from the URL
  const service = services.find((service) => service.id === serviceId); // Find the service by ID

  if (!service) {
    return (
      <div className="not-found">
        <h2>Service Not Found</h2>
        <Link to="/services">Go Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="single-service">
      <div className="single-service-header">
        <img src={service.image} alt={service.title} className="service-banner" />
        <h1>{service.title}</h1>
      </div>
      <div className="single-service-content">
        <p>{service.description}</p>
        <Link to="/services" className="button1">Back to All The Services</Link>
      </div>
    </div>
  );
};

export default SingleService;
