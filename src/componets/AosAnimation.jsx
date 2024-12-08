import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const AosAnimation = () => {
  useEffect(() => {
    // Initialize AOS once when the component mounts
    AOS.init({
      duration: 1000,  // Global animation duration
      easing: 'ease-in-out', // Easing function for animations
      once: false, // Animation will only trigger once
    });
    AOS.refresh(); // Refresh AOS on component updates or route changes
  }, []);

  return null; // This component doesn't render anything
};

export default AosAnimation;
