const countries = [
  {
    id: 1,
    name: "Nigeria",
    flag: "https://flagcdn.com/ng.svg",
    images: [
      {
        url: "https://media.istockphoto.com/id/1506554827/photo/an-aerial-image-of-the-shores-of-victoria-island-lagos.jpg?b=1&s=612x612&w=0&k=20&c=ZhDgaTfth5M_u1Du33X_MpHE3_Eh8wo4Dxm6r5ND2tw=",
        placeName: "Lagos",
      },
      {
        url: "https://images.pexels.com/photos/3172830/pexels-photo-3172830.jpeg?auto=compress&cs=tinysrgb&w=400",
        placeName: "Abuja",
      },
      {
        url:"https://images.pexels.com/photos/8060300/pexels-photo-8060300.jpeg?auto=compress&cs=tinysrgb&w=400",
        placeName: "Kano",
      },
      {
        url: "https://media.istockphoto.com/id/1506554827/photo/an-aerial-image-of-the-shores-of-victoria-island-lagos.jpg?b=1&s=612x612&w=0&k=20&c=ZhDgaTfth5M_u1Du33X_MpHE3_Eh8wo4Dxm6r5ND2tw=",
        placeName: "Port Harcourt",
      },
    ],
    descriptions: [
      "Rich in culture and diversity.",
      "A growing economy with vast natural resources.",
      "Known for its vibrant music and arts.",
    ],
    visaTypes: ["Tourist Visa", "Business Visa", "Marriage Visa"],
    visaFree: "Visa required for most travelers.",
  },
  {
    id: 2,
    name: "United States",
    flag: "https://flagcdn.com/us.svg",
    images: [
      {
        url: "https://images.pexels.com/photos/27498575/pexels-photo-27498575/free-photo-of-sea-coast-of-new-york-with-brooklyn-bridge-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=400",
        placeName: "New York City",
      },
      {
        url: "https://images.pexels.com/photos/28614058/pexels-photo-28614058/free-photo-of-seattle-night-street-scene-with-space-needle.jpeg?auto=compress&cs=tinysrgb&w=400",
        placeName: "Los Angeles",
      },
      {
        url: "/images/hotel.jpg",
        placeName: "Chicago",
      },
      {
        url: "https://images.pexels.com/photos/105626/pexels-photo-105626.jpeg?auto=compress&cs=tinysrgb&w=400",
        placeName: "San Francisco",
      },
    ],
    descriptions: [
      "Land of opportunities and innovation.",
      "Home to iconic landmarks like the Statue of Liberty.",
      "A diverse country with a mix of cultures.",
    ],
    visaTypes: ["Tourist Visa", "Business Visa", "Student Visa"],
    visaFree: "Visa required for most travelers.",
  },
  {
    id: 3,
    name: "Canada",
    flag: "https://flagcdn.com/ca.svg",
    images: [
      {
        url: "https://images.pexels.com/photos/16419508/pexels-photo-16419508/free-photo-of-skyscrapers-in-vancouver-downtown-canada.jpeg?auto=compress&cs=tinysrgb&w=400",
        placeName: "Toronto",
      },
      {
        url: "https://images.pexels.com/photos/29578741/pexels-photo-29578741/free-photo-of-aerial-view-of-saint-casimir-in-fall-quebec.jpeg?auto=compress&cs=tinysrgb&w=400",
        placeName: "Vancouver",
      },
      {
        url: "https://images.pexels.com/photos/15626406/pexels-photo-15626406/free-photo-of-fairmont-frontenac-castle-hotel-in-quebec.jpeg?auto=compress&cs=tinysrgb&w=400",
        placeName: "Montreal",
      },
      {
        url: "https://images.pexels.com/photos/11589790/pexels-photo-11589790.jpeg?auto=compress&cs=tinysrgb&w=400",
        placeName: "Calgary",
      },
    ],
    descriptions: [
      "Known for its natural beauty and diversity.",
      "Offers high-quality education and healthcare.",
      "A welcoming country for immigrants.",
    ],
    visaTypes: ["Immigrant Visas (Permanent Residency)", "Tourist Visa", 
      "Nonimmigrant Visas (Temporary Stay)","Business Visa", "Work Visa", "Naija wife Visa"],
    visaFree: "Visa required for most travelers.",
  },
  {
    id: 4,
    name: "Ghana",
    flag: "https://flagcdn.com/gh.svg",
    images: [
      {
        url: "https://via.placeholder.com/400x200?text=Ghana+Image+1",
        placeName: "Accra",
      },
      {
        url: "https://via.placeholder.com/400x200?text=Ghana+Image+2",
        placeName: "Kumasi",
      },
      {
        url: "https://via.placeholder.com/400x200?text=Ghana+Image+3",
        placeName: "Cape Coast",
      },
      {
        url: "https://via.placeholder.com/400x200?text=Ghana+Image+4",
        placeName: "Takoradi",
      },
    ],
    descriptions: [
      "Known as the gateway to Africa.",
      "Rich in culture and heritage.",
      "Famous for its warm hospitality.",
    ],
    visaTypes: ["Tourist Visa", "Business Visa", "Marriage Visa"],
    visaFree: "Visa-free for select African countries.",
  },
  {
    id: 5,
    name: "Kenya",
    flag: "https://flagcdn.com/ke.svg",
    images: [
      {
        url: "https://images.pexels.com/photos/9833516/pexels-photo-9833516.jpeg?auto=compress&cs=tinysrgb&w=400",
        placeName: "Nairobi",
      },
      {
        url: "https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=400",
      },
      {
        url: "https://images.pexels.com/photos/16863348/pexels-photo-16863348/free-photo-of-traditional-samburu-woman.jpeg?auto=compress&cs=tinysrgb&w=400",
        placeName: "Masai Mara",
      },
      {
        url: "https://images.pexels.com/photos/865530/pexels-photo-865530.jpeg?auto=compress&cs=tinysrgb&w=400",
        placeName: "Lake Nakuru",
      },
    ],
    descriptions: [
      "Home to iconic wildlife and safaris.",
      "Known for its scenic landscapes and Mount Kenya.",
      "Rich in traditional culture and art.",
    ],
    visaTypes: ["Tourist Visa", "Business Visa"],
    visaFree: "Visa-free for select African and Asian countries.",
  },
  {
    id: 6,
    name: "France",
    flag: "https://flagcdn.com/fr.svg",
    images: [
      "https://via.placeholder.com/400x200?text=France+Image+1",
      "https://via.placeholder.com/400x200?text=France+Image+2",
      "https://via.placeholder.com/400x200?text=France+Image+3",
      "https://via.placeholder.com/400x200?text=France+Image+4",
    ],
    descriptions: [
      "Famous for art, cuisine, and romance.",
      "Home to iconic landmarks like the Eiffel Tower.",
      "Known for its luxury fashion and wines.",
    ],
    visaTypes: ["Tourist Visa", "Business Visa", "Work Visa"],
    visaFree: "Visa-free for EU citizens and Schengen visa holders.",
  },
  {
    id: 7,
    name: "Switzerland",
    flag: "https://flagcdn.com/ch.svg",
    images: [
      "https://via.placeholder.com/400x200?text=Switzerland+Image+1",
      "https://via.placeholder.com/400x200?text=Switzerland+Image+2",
      "https://via.placeholder.com/400x200?text=Switzerland+Image+3",
      "https://via.placeholder.com/400x200?text=Switzerland+Image+4",
    ],
    descriptions: [
      "Known for its neutrality and stunning Alps.",
      "Home to luxury watches and chocolates.",
      "Offers world-class ski resorts and hiking trails.",
    ],
    visaTypes: ["Tourist Visa", "Business Visa", "Student Visa"],
    visaFree: "Visa-free for EU citizens and Schengen visa holders.",
  },
  {
    id: 8,
    name: "Australia",
    flag: "https://flagcdn.com/au.svg",
    images: [
      "https://via.placeholder.com/400x200?text=Australia+Image+1",
      "https://via.placeholder.com/400x200?text=Australia+Image+2",
      "https://via.placeholder.com/400x200?text=Australia+Image+3",
      "https://via.placeholder.com/400x200?text=Australia+Image+4",
    ],
    descriptions: [
      "Known for its iconic Sydney Opera House.",
      "A land of adventure and scenic landscapes.",
      "Rich in Aboriginal culture and heritage.",
    ],
    visaTypes: ["Tourist Visa", "Work Visa", "Student Visa", "Business Visa"],
    visaFree: "Visa required for most travelers.",
  },
  {
    id: 9,
    name: "United Kingdom",
    flag: "https://flagcdn.com/gb.svg",
    images: [
      "https://via.placeholder.com/400x200?text=UK+Image+1",
      "https://via.placeholder.com/400x200?text=UK+Image+2",
      "https://via.placeholder.com/400x200?text=UK+Image+3",
      "https://via.placeholder.com/400x200?text=UK+Image+4",
    ],
    descriptions: [
      "A hub of culture and history.",
      "Known for its iconic landmarks like Big Ben.",
      "Offers world-class education and healthcare.",
    ],
    visaTypes: ["Tourist Visa", "Work Visa", "Student Visa"],
    visaFree: "Visa required for most travelers.",
  },
  {
    id: 10,
    name: "China",
    flag: "https://flagcdn.com/cn.svg",
    images: [
      "https://via.placeholder.com/400x200?text=China+Image+1",
      "https://via.placeholder.com/400x200?text=China+Image+2",
      "https://via.placeholder.com/400x200?text=China+Image+3",
      "https://via.placeholder.com/400x200?text=China+Image+4",
    ],
    descriptions: [
      "Known for its rich history and culture.",
      "Home to the Great Wall and Forbidden City.",
      "A leading global economic powerhouse.",
    ],
    visaTypes: ["Tourist Visa", "Business Visa", "Student Visa", "Work Vsa"],
    visaFree: "Visa-free for certain Asian countries and regions.",
  },
  // More countries would follow with similar structure
];

export default countries;
