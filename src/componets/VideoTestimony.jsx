import React, { useState, useRef } from "react";
import "./VideoTestimony.css";
import { FaPlay } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Queen Lee",
    testimony:
      "Diamond Visa and Immigration Services helped me achieve my dream of studying abroad. Their team is fantastic!",
    videoUrl: "/videos/backgroundVideo.mp4", // Replace with actual video URL
  },
  {
    id: 2,
    name: "Godwin Chucks",
    testimony:
      "Thanks to Diamond Visa and Immigration Services, my family and I are now happily settled in Canada. Highly recommended!",
    videoUrl: "/videos/backgroundVideo.mp4", // Replace with actual video URL
  },
];

const VideoTestimony = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const handlePlay = (id) => {
    setActiveVideo(id);
  };

  const handlePause = () => {
    setActiveVideo(null);
  };

  return (
    <div className="video-testimony-containerr">
        <div className="abbout-title">// TESTIMONY VIDEOS //</div>
      <div className="testimony-gridd">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimony-cardd">
            <div
              className={`video-overlay ${
                activeVideo === testimonial.id ? "hidden" : ""
              }`}
            >
              <p className="overlay-text"><FaPlay/></p>
            </div>
            <video
              controls
              className="testimony-video"
              poster="/images/ad.png" // Optional poster image
              onPlay={() => handlePlay(testimonial.id)}
              onPause={handlePause}
              onEnded={handlePause}
            >
              <source src={testimonial.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="testimony-info">
              <p className="testimony-name">- {testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoTestimony;
