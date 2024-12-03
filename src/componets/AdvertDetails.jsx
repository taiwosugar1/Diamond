import React from "react";
import { Link, useParams } from "react-router-dom";
import "./AdvertDetails.css";

const AdvertDetails = () => {
  const { serviceId } = useParams();

  // Function to retrieve service details
  const getServiceDetails = (serviceId) => {
    const serviceDetails = {
      consultancy: {
        title: "Consultancy",
        description: "We provide expert consultancy services in various fields including business strategy, marketing, and technology...",
        images: [
          "/images/st1.png",
          "https://example.com/consultancy2.jpg", // Image 2
        ],
        link: "https://example.com/consultancy-services",
        highlights: [
          "Business Strategy",
          "Marketing Consultation",
          "Technology Integration"
        ],
        testimonials: [
          {
            name: "John Doe",
            review: "The consultancy team helped us streamline our business operations and boost our profits significantly!"
          },
          {
            name: "Jane Smith",
            review: "Highly recommended for anyone looking for expert advice and practical solutions."
          }
        ],
        pricing: "Contact us for personalized pricing based on your business needs.",
      },
      "trip-planning": {
        title: "Trip Planning",
        description: "Let us help you plan the perfect trip with tailored itineraries, travel bookings, and recommendations...",
        images: [
          "https://example.com/trip-planning1.jpg", // Image 1
          "https://example.com/trip-planning2.jpg", // Image 2
        ],
        link: "https://example.com/trip-planning-services",
        highlights: [
          "Custom Travel Itineraries",
          "Expert Travel Advice",
          "Flight & Hotel Bookings"
        ],
        testimonials: [
          {
            name: "Alice Brown",
            review: "Our trip was perfectly planned with all the details taken care of. Truly amazing service!"
          }
        ],
        pricing: "Starting at $200 per itinerary.",
      },
      // Other services here...
    };

    return serviceDetails[serviceId] || {};
  };

  const { title, description, images, link, highlights, testimonials, pricing } = getServiceDetails(serviceId);

  return (
    <div className="service-detail-container">
      <br />
      <Link to={"/"}>Go Back to Home page</Link>
      <br />
      <h2>{title}</h2>
      <p>{description}</p>

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
        {images && images.map((img, index) => (
          <img key={index} src={img} alt={`${title} ${index + 1}`} className="service-image" />
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
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className="cta-button">Learn More</button>
        </a>
      </div>

      {/* Testimonials Section */}
      {testimonials && testimonials.length > 0 && (
        <div className="testimonials">
          <h3>What Our Clients Say</h3>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <p>"{testimonial.review}"</p>
              <p><strong>- {testimonial.name}</strong></p>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default AdvertDetails;
