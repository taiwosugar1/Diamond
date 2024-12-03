import { FaAddressCard, FaBusinessTime, FaCoins, FaPlane } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { GrEmergency } from "react-icons/gr";

const serviceDetails = {
        
    consultancy: {
      title: "Consultancy",
      description:
        "We provide expert consultancy services in various fields including business strategy, marketing, and technology...",
      images: [
        "/images/st1.png",
        "https://images.pexels.com/photos/8528742/pexels-photo-8528742.jpeg?auto=compress&cs=tinysrgb&w=400",
      ],
      link: "https://example.com/consultancy-services",
      highlights: [
        "Business Strategy",
        "Marketing Consultation",
        "Technology Integration",
      ],
      testimonials: [
        {
          name: "John Doe",
          review:
            "The consultancy team helped us streamline our business operations and boost our profits significantly!",
        },
        {
          name: "Jane Smith",
          review:
            "Highly recommended for anyone looking for expert advice and practical solutions.",
        },
      ],
      pricing: "Contact us for personalized pricing based on your business needs.",
    },
       "airbnb": {
title: "Airbnb Hosting Services",
description:
"Maximize your property’s potential with our Airbnb hosting services. From property listing optimization to guest management, we handle it all to ensure you earn more while providing an exceptional experience for your guests.",
images: [
"/images/z2.png",
"/images/z1.png",
],
link: "https://www.instagram.com/zeavixeventandmore",
highlights: [
{ name: "Business Strategy", path: "business-strategy" },
{ name: "Marketing Consultation", path: "marketing-consultation" },
{ name: "Technology Integration", path: "technology-integration" },
],
testimonials: [
{
  name: "Emma Wilson",
  review:
    "Their Airbnb hosting services completely transformed my rental income. Guests love the experience, and I love the ease of letting them handle everything!",
},
{
  name: "Liam Johnson",
  review:
    "From creating a stunning listing to managing guests, they made the entire process effortless. Highly recommend their services!",
},
],
pricing: "Contact us for tailored pricing based on your property’s needs and location.",
      },

    "trip-planning": {
      title: "Trip Planning",
      description:
        "Let us help you plan the perfect trip with tailored itineraries, travel bookings, and recommendations...",
      images: [
        "https://example.com/trip-planning1.jpg", // Image 1
        "https://example.com/trip-planning2.jpg", // Image 2
      ],
      link: "https://example.com/trip-planning-services",
      highlights: [
        "Custom Travel Itineraries",
        "Expert Travel Advice",
        "Flight & Hotel Bookings",
      ],
      testimonials: [
        {
          name: "Alice Brown",
          review:
            "Our trip was perfectly planned with all the details taken care of. Truly amazing service!",
        },
      ],
      pricing: "Starting at $200 per itinerary.",
    },
    tourism: {
      title: "Tourism",
      description:
        "Explore the world's most beautiful destinations with our expert-guided tourism services. Discover unique experiences and create unforgettable memories.",
      images: [
        "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/2365916/pexels-photo-2365916.jpeg?auto=compress&cs=tinysrgb&w=400",
      ],
      link: "https://example.com/tourism-services",
      highlights: [
        "Guided Tours",
        "Cultural Experiences",
        "Customized Vacation Packages",
      ],
      testimonials: [
        {
          name: "Samuel Jackson",
          review:
            "Our family vacation was incredible thanks to the amazing guides and thoughtful planning. Highly recommend!",
        },
      ],
      pricing: "Packages starting at $500.",
    },
    "transportation-services": {
      title: "Transportation Services",
      description:
        "Seamless transportation services to meet all your needs, from airport transfers to corporate transportation and logistics.",
      images: [
        "https://images.pexels.com/photos/97075/pexels-photo-97075.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/13861/IMG_3496bfree.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      link: "https://www.zeavix.com",
      highlights: [
        "Airport Transfers",
        "Corporate Transportation",
        "Freight and Logistics",
      ],
      testimonials: [
        {
          name: "Michael Green",
          review:
            "Their transportation services are punctual and professional. The best we've used for our corporate events.",
        },
      ],
      pricing: "Starting at $50 per trip.",
    },
    "expert-advice": {
      title: "Accurate and Expert Advice",
      description:
        "Get precise and actionable advice from our seasoned experts to solve challenges in business, personal life, and beyond.",
      images: [
        "https://images.pexels.com/photos/3182752/pexels-photo-3182752.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=400",
      ],
      link: "https://example.com/expert-advice",
      highlights: [
        "Personalized Guidance",
        "Actionable Strategies",
        "Experienced Professionals",
      ],
      testimonials: [
        {
          name: "Sophia Carter",
          review:
            "Their advice was spot on and helped us make informed decisions in a timely manner. Thank you for your expertise!",
        },
      ],
      pricing: "Consultation starts at $100 per session.",
    },
    
  };
  export default serviceDetails;


  