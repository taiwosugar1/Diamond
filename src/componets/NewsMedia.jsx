import React from "react";
import "./NewsMedia.css";
import ContactInfo from "./contact/ContactInfo";

const newsArticles = [
  {
    id: 1,
    title: "Top Immigration Trends in 2024",
    content:
      "Discover the latest trends and changes in global immigration policies that could affect your plans to move abroad.",
    image: "/images/pilot.jpg", 
    link: "/news/top-immigration-trends-2024",
  },
  {
    id: 2,
    title: "How Visa Experts Simplify Your Journey",
    content:
      "Explore how immigration services can guide you through the complexities of obtaining a visa and settling in a new country.",
    image: "/images/hotel.jpg", 
    link: "/news/how-visa-experts-help",
  },
  {
    id: 3,
    title: "Success Stories: Real People, Real Journeys",
    content:
      "Read inspiring success stories of individuals and families who achieved their immigration dreams.",
    image: "/images/st2.png", 
    link: "/news/success-stories",
  },
];

const NewsMedia = () => {
  return (
    <div className="news-media-container">
      <h1 className="abbout-heading">NEWS & MEDIA</h1>
      <p className="dessc">
        Stay updated with the latest news, expert insights, and inspiring
        success stories in the world of immigration and visas.
      </p>
      <div className="news-grid">
        {newsArticles.map((article) => (
          <div className="news-card" key={article.id}>
            <img
              src={article.image}
              alt={article.title}
              className="news-image"
            />
            <h3 className="news-title">{article.title}</h3>
            <p className="news-content">{article.content}</p>
            <a href={article.link} className="news-link">
              Read More
            </a>
          </div>
        ))}
      </div>
      <ContactInfo/>
      
    </div>
  );
};

export default NewsMedia;
