import React from "react";
import { Link, useParams } from "react-router-dom";
import "./AdvertDetails.css";
import serviceDetails from "./array/serviceDetails";

const AdvertDetails = () => {
  const { serviceId } = useParams();

  // Function to retrieve service details
  const getServiceDetails = (serviceId) => {
  

    return serviceDetails[serviceId] || {};
  };

  // Function to get today's date and time
  const getCurrentDateTime = () => {
    const now = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    const timeOptions = { hour: "2-digit", minute: "2-digit", second: "2-digit" };
    const date = now.toLocaleDateString("en-US", options);
    const time = now.toLocaleTimeString("en-US", timeOptions);
    return `${date} at ${time}`;
  };

  const { title, description, images, link, highlights, testimonials, pricing } =
    getServiceDetails(serviceId);

  return (
    <div className="service-detail-container">
      <br />
      <Link to={"/"}>Go Back to Home page</Link>
      <br />
      <div className="content-box" data-aos="zoom-in">
        <h2 className="abbout-heading">// {title} // </h2>
        <p className='desc'>{description}</p>
      </div>

      {/* Highlights Section */}
      {highlights && highlights.length > 0 && (
        <div className="highlights">
          <h3>Service Highlights</h3>
          <ul>
            {highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Display images */}
      <div className="images-container">
        {images &&
          images.map((img, index) => (
            <div key={index} className="image-block">
              <img
                src={img}
                alt={`${title} ${index + 1}`}
                className="service-image"
              />
              <p className="image-timestamp" style={{color: "#ff0000"}}>
                {getCurrentDateTime()}
              </p>
            </div>
          ))}
      </div>

      {/* Pricing Information */}
      {pricing && (
        <div className="pricing">
          <h3>Pricing Information</h3>
          <p>{pricing}</p>
        </div>
      )}

      {/* Button to navigate to external link */}
      <div className="navigate-button">
        <Link to={link} className="button1">
          Learn More
        </Link>
      </div>

      {/* Testimonials Section */}
      {testimonials && testimonials.length > 0 && (
        <div className="testimonials">
          <h3>What Our Clients Say</h3>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <p>"{testimonial.review}"</p>
              <p>
                <strong>- {testimonial.name}</strong>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdvertDetails;
