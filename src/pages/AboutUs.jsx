

import React, { useState } from 'react';
import "./AboutUs.css";
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';
import { BsYoutube } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';


const AboutUs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className='about'>
      <div className='about-details'>
        <div >
          <h3>DIAMOND VISA</h3>
          <ul>
            <Link to={"/tourList"}><li> Tour</li></Link>
            <li onClick={handleToggle}>Booking</li>
            {isOpen && (
              <div className='about-details-drop'> details</div>
            )}
          </ul>      
        </div>
        <h1>About Us</h1>
        <p><b>
Welcome to Diamond Visa and immigration services:</b> Your trusted partner for simplified and expedited visa processing, offering comprehensive and reliable services."
</p>
      </div>


      {/* ------------------About staff----------------- */}
     <section>

      <h3><b>Diamond Visa and immigration services</b>,
         We are your trusted partner for achieving your travel dreams, offering professional, efficient, and personalized visa services. Reach out to us for expert guidance and support.</h3>
      <div className="about-staff">
        {staffMembers.map((staffMember, index) => (
          <div className="staff" key={index}>
            <img src={staffMember.image} alt="" />
            <h2>{staffMember.name}</h2>
            <p>{staffMember.position}</p>
            <div className="staff-social">
              {staffMember.social.map((socialLink, index) => (
                <Link to={socialLink.link}><div key={index}>
                {socialLink.icon } 
                </div></Link>
              ))}
            </div>
            <p>{staffMember.bio}</p>
          </div>
        ))}
      </div>
      </section>

    {/* ----------------fotter-------------------- */}

      <footer>
        <div className="about-footer">
            <div>
              <h3>ABOUT US</h3>
              
              <p>
         Our dedicated team is committed to making your dreams of living and working abroad a reality.
        </p>
            </div>
            <div>
              <a href="tel: +1-614-707-6245"><h3>CALL US</h3></a>
              
         <p> 
          Call us now to speak with our experienced immigration consultants and take the first step towards achieving your dreams.
          </p>
            </div>
            <div>
              <h3>DIAMOND VISA AND <br/>IMMIGRATION <br/> SERVICES</h3>
              
              <p>
                Empowering your global journey with expert visa and immigration solutions.
           </p>
            </div>
            <div>
              <h3>VISA APPLICATIONS</h3>
              
              <p>Our team is dedicated to providing personalized support and guidance throughout your visa application process.</p>
            </div>
           
        </div>
        <p className="paragraph">Copyright 2024 © <b>Diamond Visa and immigration services </b>All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;

const staffMembers = [
    {
      name: 'DIAMOND AVE',
      position: 'CEO/ FOUNDER',
      image: 'images/diamond-ave.png',
      social: [
        { icon: <FaFacebook />, link: 'https://facebook.com' },
        { icon: <FaTwitter />, link: 'https://twitter.com'  },
        { icon: <BsYoutube />, link: 'https://youtube.com'  },
        { icon: <FaInstagram />, link: 'https://instagram.com' },
        { icon: <MdEmail />, link: 'mailto:email@example.com' },
      ],
      bio: 'Diamond Ave, founder and CEO of Diamond Visa & Immigration services, exoertly guilding clients through complex immigration processes. ',
    },
    {
      name: 'CHUKS GODWIN',
      position: 'MANAGER',
      image: 'images/chucks.jpeg',
      social: [
        { icon: <FaFacebook />, link: 'https://facebook.com' },
        { icon: <FaTwitter />, link: 'https://twitter.com'  },
        { icon: <BsYoutube />, link: 'https://youtube.com'  },
        { icon: <FaInstagram />, link: 'https://instagram.com' },
        { icon: <MdEmail />, link: 'mailto:godwinchukss2@gmail.com' },
      ],
      bio: 'Chucks Godwin, Manager at Diamond Visa & Immigration Services, dedicated to delivering expert immigration solutions with a personal touch.',
    },
    // {
    //   name: 'MIKE DOE',
    //   position: 'ADMIN',
    //   image: 'images/man2.jpg',
    //   social: [
    //     { icon: <FaFacebook />, link: 'https://facebook.com' },
    //     { icon: <FaTwitter />, link: 'https://twitter.com'  },
    //     { icon: <BsYoutube />, link: 'https://youtube.com'  },
    //     { icon: <FaInstagram />, link: 'https://instagram.com' },
    //     { icon: <MdEmail />, link: 'mailto:email@example.com' },
    //   ],
    //   bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, officia?',
    // },
    // {
    //   name: 'RICHARD MILE',
    //   position: "TRANSPORTATION",
    //   image: 'images/man3.jpg',
    //   social: [
    //     { icon: <FaFacebook />, link: 'https://facebook.com' },
    //     { icon: <FaTwitter />, link: 'https://twitter.com'  },
    //     { icon: <BsYoutube />, link: 'https://youtube.com'  },
    //     { icon: <FaInstagram />, link: 'https://instagram.com' },
    //     { icon: <MdEmail />, link: 'mailto:email@example.com' },
    //   ],
    //   bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, officia?',
    // },
    // Add more staff members here
  ];
