import React, { useState, useEffect, useRef } from 'react';
import './Testimony.css';

const testimonies = [
  {
    id: 1,
    text: "This service changed my life! The visa application was seamless, and I received it faster than expected. Amazing support.",
    name: "John Doe",
    country: "USA",
  },
  {
    id: 2,
    text: "I was impressed by the efficiency and professionalism. The process was quick, and my questions were answered promptly. Highly recommend!",
    name: "Sarah Smith",
    country: "Canada",
  },
  {
    id: 3,
    text: "The customer service is excellent. I was guided through the application process. I’d definitely use this service again.",
    name: "Michael Lee",
    country: "UK",
  },
  {
    id: 4,
    text: "I had an emergency, and this service helped me get my visa processed quickly. I’m very grateful for the support!",
    name: "Emily Zhang",
    country: "China",
  },
  {
    id: 5,
    text: "The process was straightforward, and the team was extremely helpful. I’m now enjoying my stay in the UK, thanks to you.",
    name: "Aisha Bello",
    country: "Nigeria",
  },
  {
    id: 6,
    text: "I got my business visa with ease, and the team was very knowledgeable. I highly recommend this reliable service to anyone.",
    name: "Ahmed Farouk",
    country: "Egypt",
  },
  {
    id: 7,
    text: "I couldn’t have asked for a better experience. Everything, from consultation to approval, was smooth and well-organized. Thank you so much!",
    name: "Laura Wilson",
    country: "Australia",
  },
  {
    id: 8,
    text: "Excellent service! My visa was approved within the week. The instructions were clear and easy to follow. Thanks for the support!",
    name: "Luis Gomez",
    country: "Spain",
  },
  {
    id: 9,
    text: "This company is amazing! Their attention to detail is exceptional. I felt supported throughout the entire visa process. Highly recommend!",
    name: "David Kim",
    country: "South Korea",
  },
  {
    id: 10,
    text: "The visa service was efficient and stress-free. I received constant updates and always felt informed. Will definitely use them again!",
    name: "Priya Sharma",
    country: "India",
  },
  {
    id: 11,
    text: "The team was fantastic. My visa was processed quickly, and I was kept in the loop at all times. Highly recommend!",
    name: "Samantha Jones",
    country: "New Zealand",
  },
  {
    id: 12,
    text: "I’m very pleased with the service. The visa application was simple, and I received it much quicker than I expected.",
    name: "Daniel Martinez",
    country: "Mexico",
  },
  {
    id: 13,
    text: "Incredible experience! The team was extremely helpful. My visa was approved in record time. I couldn’t be happier.",
    name: "Raj Patel",
    country: "India",
  },
  {
    id: 14,
    text: "I had a great experience. The application process was smooth and efficient. I will definitely recommend this service to others.",
    name: "Olivia Brown",
    country: "USA",
  },
  {
    id: 15,
    text: "This company offers the best visa service! My application was processed quickly, and the staff was supportive throughout the process.",
    name: "James Miller",
    country: "Canada",
  },
  {
    id: 16,
    text: "I can’t thank this service enough. My visa application was quick and easy, with constant updates. Highly recommend it to anyone!",
    name: "Sophia Wong",
    country: "Singapore",
  },
  {
    id: 17,
    text: "Amazing service! From start to finish, everything was organized. I had no issues with my visa application. Definitely the best service.",
    name: "Victor Lee",
    country: "South Korea",
  },
  {
    id: 18,
    text: "This service made the visa process easy and fast. I was kept updated every step of the way, and it was stress-free.",
    name: "Emily Taylor",
    country: "UK",
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
        <p className='desc'>Our client love us and alway get impress by our decisive services</p>

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
            
            <p className="testimony-text">{testimony.text}</p>
            <p className="testimony-name">
              <strong>{testimony.name}</strong> - {testimony.country} 
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Testimony;
