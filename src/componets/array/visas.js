
import { FaAddressCard, FaBusinessTime, FaCoins, FaPlane } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { GrEmergency } from "react-icons/gr";


const visas = [
    {
      id: 1,
      type: "Tourist Visa",
      description: "Perfect for those who want to explore and travel.",
      icon: <FaMapLocation />,
      backgroundImage: "/images/st2.png",
      details: "The Tourist Visa is ideal for those who wish to explore and travel to new destinations. It allows short-term stays and is perfect for leisure and sightseeing.",
    },
    {
      id: 2,
      type: "Emergency Visa",
      description: "Immediate attention and processing.",
      icon: <GrEmergency />,
      backgroundImage: "/images/im1.png",
      details: "The Emergency Visa is designed for urgent situations, providing expedited processing for individuals facing time-sensitive travel needs.",
      link: "https://wa.me/16147076245?text=Hi, I need assistance with an Emergency Visa.",
    },
    {
      id: 3,
      type: "K1/i-130 Visa Application",
      description: "Fiancé(e) or relative visa for U.S. immigration.",
      icon: <FaPlane />,
      backgroundImage: "/images/st9.png",
      details: "The K1/i-130 Visa is for those seeking U.S. immigration through a fiancé(e) or a close relative. It facilitates family reunification.",
    },
    {
      id: 4,
      type: "Naija Wife / Resident Permit",
      description: "Helping you secure residency or permits through marriage or other legal means.",
      icon: <FaAddressCard />,
      backgroundImage: "/images/st10.png",
      details: "The Naija Wife / Resident Permit service is designed for individuals who are married to Nigerian citizens or seeking residency permits through marriage or other legal pathways. We provide guidance and assistance with the necessary documentation, ensuring compliance with immigration regulations and a smooth application process. Whether you are a foreign spouse or an individual seeking long-term residency, we are here to help.",
    },
    {
      id: 5,
      type: "Business Visa",
      description: "For business-related travel and meetings.",
      icon: <FaBusinessTime />,
      backgroundImage: "/images/st4.png",
      details: "The Business Visa is designed for individuals traveling for business purposes, such as attending conferences, meetings, or exploring investment opportunities.",
    },
    {
      id: 6,
      type: "Visa Extension",
      description: "Apply for an extension to your existing visa.",
      icon: <FaCoins />,
      backgroundImage: "/images/t1.png",
      details: "The Visa Extension allows individuals to extend their stay in a foreign country beyond their initial visa expiration. It is ideal for those who wish to continue working, studying, or staying in the country under the same visa category. If you need assistance with applying for a Visa Extension, we are here to help you navigate the process.",
    },
  ];
  

  export default visas;