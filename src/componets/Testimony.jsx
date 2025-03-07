import React, { useState, useEffect, useRef } from 'react';
import './Testimony.css';

const testimonies = [
  {
    id: 1,
    text: "This service changed my life! The visa application was seamless and faster than expected.",
    name: "John Doe",
    country: "USA",
    image: "/images/st4.png",
  },
  {
    id: 2,
    text: "I was impressed by the efficiency and professionalism. The process was quick and smooth.",
    name: "Sarah Smith",
    country: "Canada",
    image: "/images/st2.png",


  },
  {
    id: 3,
    text: "The customer service was excellent. I was guided through the process and highly recommend it.",
    name: "Michael Lee",
    country: "UK",
    image: "/images/st3.png",

  },
  {
    id: 4,
    text: "I had an emergency, and this service helped me get my visa processed quickly. Grateful!",
    name: "Emily Zhang",
    country: "China",
     image: "/images/st4.png",


  },
  {
    id: 5,
    text: "The process was straightforward, and the team was helpful. Now enjoying my stay in the UK.",
    name: "Aisha Bello",
    country: "Nigeria",
    image: "/images/st5.png",

  },
  {
    id: 6,
    text: "I got my business visa with ease, and the team was very knowledgeable. Highly recommend.",
    name: "Ahmed Farouk",
    country: "Egypt",
    image: "/images/st6.png",


  },
  {
    id: 7,
    text: "I couldn’t have asked for a better experience. Everything from consultation to approval was smooth.",
    name: "Laura Wilson",
    country: "Australia",
    image: "/images/t1.png",

  },
  {
    id: 8,
    text: "Excellent service! My visa was approved within the week. The instructions were clear and easy.",
    name: "Luis Gomez",
    country: "Spain",
    image: "/images/im1.png",
  },
  {
    id: 9,
    text: "This company is amazing! Their attention to detail is exceptional. I felt supported throughout the process.",
    name: "David Kim",
    country: "South Korea",
    image: "/images/im2.png",


  },
  {
    id: 10,
    text: "The visa service was efficient and stress-free. I received constant updates and felt well-informed.",
    name: "Priya Sharma",
    country: "India",
    image: "/images/ad.png",

  },
  {
    id: 11,
    text: "The team was fantastic. My visa was processed quickly, and I was kept updated throughout.",
    name: "Samantha Jones",
    country: "New Zealand",
    image: "/images/ac.png",

  },
  {
    id: 12,
    text: "I’m very pleased with the service. The visa application was simple and much quicker than expected.",
    name: "Daniel Martinez",
    country: "Mexico",
    image: "/images/h1.png",
  },
  {
    id: 13,
    text: "Incredible experience! The team was extremely helpful. My visa was approved quickly, and I’m happy.",
    name: "Raj Patel",
    country: "India",
    image: "/images/h3.png",

  },
  {
    id: 14,
    text: "I had a great experience. The application process was smooth, and I’ll recommend this service.",
    name: "Olivia Brown",
    country: "USA",
    image: "/images/h2.png",

  },
  {
    id: 15,
    text: "This company offers the best visa service! My application was processed quickly, and the staff helped.",
    name: "James Miller",
    country: "Canada",
    image: "/images/im1.png",

  },
  {
    id: 16,
    text: "I can’t thank this service enough. My visa application was quick, with constant updates. Highly recommend.",
    name: "Sophia Wong",
    country: "Singapore",
    image: "/images/1m2.png",

  },
  {
    id: 17,
    text: "Amazing service! Everything was organized. I had no issues with my visa application. Best service ever.",
    name: "Victor Lee",
    country: "South Korea",
    image: "/images/st6.png",
  },
  {
    id: 18,
    text: "This service made the visa process easy and fast. I was kept updated every step of the way.",
    name: "Emily Taylor",
    country: "UK",
    image: "/images/st7.png",
  },
];

const Testimony = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStart = useRef(0); // To store touch start position
  const containerRef = useRef(null); // Reference to the container for scrolling

  // Automatically change testimony every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonies.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonies.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonies.length) % testimonies.length);
  };

  // Handle swipe (touch) events
  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    const touchDifference = touchStart.current - touchEnd;

    if (touchDifference > 50) {
      // Swiped left (next)
      handleNext();
    } else if (touchDifference < -50) {
      // Swiped right (previous)
      handlePrev();
    }
  };

  // Handle smooth scrolling by directly manipulating scroll position
  useEffect(() => {
    if (containerRef.current) {
      const scrollDistance = containerRef.current.scrollWidth / testimonies.length;
      containerRef.current.scrollTo({
        left: currentIndex * scrollDistance,
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  return (
    <section className="testimony-container">
      <div className="content-box" data-aos="zoom-in">
        <p className="abbout-title">// WHAT OUR CLIENTS SAY //</p>
        <h2 className="abbout-heading">
        Let’s Explore Why People Say About Us
        </h2>
        <p className='desc'>Our client love us and alway get impress by our decisive services.</p>

      </div>
      <div className="testimony-nav">
        <button className="scroll-button" onClick={handlePrev}>❮</button>
        <button className="scroll-button" onClick={handleNext}>❯</button>
      </div>
      <div
        className="testimony-cards"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        ref={containerRef}
        style={{
          display: 'flex',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          scrollBehavior: 'smooth',
        }}
      >
        {testimonies.map((testimony, index) => (
          <div
            key={testimony.id}
            className="testimony-card"
            style={{
              flex: 'none',
              width: '100%',
              scrollSnapAlign: 'center',
              transition: 'transform 0.5s ease',
            }}
          >
            <div className="img-container">
            <div className="testimony-image" > 
             <img src={testimony.image} alt="" />

            </div>
            <p className="testimony-name">
              <strong>{testimony.name}</strong> <br /> <p className='test-p'>{testimony.country} </p>
            </p>
            </div>
            <p className="testimony-text">{testimony.text}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Testimony;
