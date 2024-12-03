import React from "react";
import "./Team.css";

const teamMembers = [
  {
    id: 1,
    name: "Diamond Ave",
    role: "Founder & CEO",
    image: "/images/diamond-ave.png", // Replace with actual image URL
    description:
      "Grace is the driving force behind Diamond Visa and Immigration Services, with over 10 years of experience in immigration consultancy.",
  },
  {
    id: 2,
    name: "James Carter",
    role: "Senior Immigration Consultant",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    description:
      "James specializes in providing tailored immigration solutions, ensuring a seamless journey for our clients.",
  },
  {
    id: 3,
    name: "Sophia Martinez",
    role: "Legal Advisor",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    description:
      "Sophia provides expert legal guidance to clients navigating complex immigration regulations.",
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "Client Relations Manager",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    description:
      "Michael ensures that every client receives exceptional support and personalized attention throughout their process.",
  },
];

const Team = () => {
  return (
    <section className="team-page">
      <div className="content-box" data-aos="zoom-in">
        <p className="abbout-title">// OUR TEAM //</p>
        <h2 className="abbout-heading">
        Meet Our Team
        </h2>
        <p className='desc'> At Diamond Visa and Immigration Services, we take pride in our
          dedicated team of professionals who are committed to helping you
          achieve your immigration goals.</p>
      </div>

      <div className="team-grid">
        {teamMembers.map((member) => (
          <div className="team-card" key={member.id}>
            <img
              src={member.image}
              alt={member.name}
              className="team-member-image"
            />
            <div className="team-member-info">
              <h3 className="team-member-name">{member.name}</h3>
              <p className="team-member-role">{member.role}</p>
              <p className="team-member-description">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
