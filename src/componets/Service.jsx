import React from "react";
import "./Service.css";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Visa Consultation",
    description:
      "Personalized visa guidance tailored to your unique travel or immigration goals.",
    image: "/images/h1.png", // Replace with a real image
  },
  {
    title: "Fast Processing",
    description:
      "Experience swift and hassle-free visa application processing with us.",
    image: "https://images.pexels.com/photos/248747/pexels-photo-248747.jpeg?auto=compress&cs=tinysrgb&w=400", // Replace with a real image
  },
  {
    title: "Business & Investor Visas",
    description:
      "Elite support for entrepreneurs and investors seeking opportunities abroad.",
    image: "https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
},
  {
    title: "Family Reunification",
    description:
      "Helping families unite and build new lives in foreign lands.",
    image: "https://images.pexels.com/photos/1128317/pexels-photo-1128317.jpeg?auto=compress&cs=tinysrgb&w=400", 
  },
  {
    title: "Study Abroad",
    description:
      "Expert assistance for students pursuing higher education overseas.",
    image: "https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=400", 
  },
  {
    title: "Luxury Car Transportation",
    description:
      "Experience premium comfort with luxury car transportation services for your travel needs, ensuring you move with style and convenience.",
    image: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    title: "Hotel Booking & Reservations",
    description:
      "Secure your stay at top-rated luxury hotels worldwide. We offer tailored recommendations and easy booking for a seamless travel experience.",
    image: "/images/hotel6.jpg",
  },
];

const continents = [
  {
    name: "Africa",
    description:
      "Discover opportunities across Africa, from work permits to family reunification programs in countries like South Africa, Nigeria, and Kenya.",
    image: "https://flagicons.lipis.dev/flags/4x3/af.svg", // Africa flag CDN
    keyPoints: [
      "Fast visa processing for South Africa",
      "Business opportunities in Kenya",
      "Study abroad programs in Egypt and Morocco",
    ],
  },
  {
    name: "Asia",
    description:
      "Asia offers vibrant cultures, study opportunities, and business investment visas in leading economies like China, Japan, and UAE.",
    image: "https://flagicons.lipis.dev/flags/4x3/as.svg", // Asia flag CDN
    keyPoints: [
      "Investor visas in Dubai",
      "Work permits for Japan and South Korea",
      "Study abroad in China and Singapore",
    ],
  },
  {
    name: "Europe",
    description:
      "Europe remains a top destination for study, work, and family reunification visas. Enjoy access to Schengen visa services.",
    image: "https://flagicons.lipis.dev/flags/4x3/eu.svg", // Europe flag CDN
    keyPoints: [
      "Schengen visa expertise",
      "Residency programs in Portugal and Spain",
      "Study and work in Germany and France",
    ],
  },
  {
    name: "North America",
    description:
      "Visa support for travel, study, and work in the USA and Canada, with additional pathways for family reunification.",
    image: "https://flagicons.lipis.dev/flags/4x3/na.svg", // North America flag CDN
    keyPoints: [
      "Express Entry program for Canada",
      "H-1B visa expertise for the USA",
      "Student visa services for top universities",
    ],
  },
  {
    name: "Australia & Oceania",
    description:
      "Explore study and work opportunities in Australia and New Zealand, including family and skilled migration services.",
    image: "https://flagicons.lipis.dev/flags/4x3/au.svg", // Australia flag CDN
    keyPoints: [
      "Skilled migration visas for Australia",
      "Study opportunities in New Zealand",
      "Family sponsorship pathways",
    ],
  },
  {
    name: "South America",
    description:
      "Uncover unique opportunities for study, business, and travel across South America, including Brazil and Argentina.",
    image: "/images/hotel6.jpg", // South America flag CDN
    keyPoints: [
      "Travel visas for Brazil and Chile",
      "Work opportunities in Argentina",
      "Cultural exchange programs",
    ],
  },
];

const Service = () => {
  return (
    <section className="services-page">
      {/* Service Section */}
      <div className="intro-section">
        <h1 className="services-heading">Our Premium Visa Services</h1>
        <p className="services-description">
          We provide elite visa solutions for individuals, families, and
          businesses. Our expertise and tailored services cater to high-class
          clients aiming to achieve their global aspirations. Trust us to guide
          you every step of the way.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />
            <div className="service-info">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              {/* <Link to={"/visa"} className='read-more'>Read More</Link> */}
            </div>
          </div>
        ))}
      </div>
      
      {/* Continent Section */}
      <div className="continent-section">
        <h2 className="continent-heading">Visa Services by Continent</h2>
        <div className="continent-grid">
          {continents.map((continent, index) => (
            <div className="continent-card" key={index}>
              <img
                src={continent.image}
                alt={continent.name}
                className="continent-image"
              />
              <div className="continent-info">
                <h3 className="continent-title">{continent.name}</h3>
                <p className="continent-description">{continent.description}</p>
                <ul className="continent-keypoints">
                  {continent.keyPoints.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
