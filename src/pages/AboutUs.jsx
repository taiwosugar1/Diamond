
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
            <Link to={"/"}><li> Tour</li></Link>
            <li onClick={handleToggle}>Booking</li>
            {isOpen && (
              <div className='about-details-drop'> details</div>
            )}
          </ul>      
        </div>
        <h1>About Us</h1>
        <p>
Welcome to Diamond Visa Services, your trusted partner in visa processing. Established with the mission to simplify and expedite the visa application processes, we are committed to providing comprehensive and reliable services to our clients.
</p>
      </div>


      {/* ------------------About staff----------------- */}
     <section>

      <h3>At <b>Diamond Visa</b>, we are more than just a visa processing agency; we are your partners in making your travel aspirations come true. Trust us to handle your visa needs with professionalism, efficiency, and a personal touch.
</h3>
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
              <hr />
              <p>
         Our dedicated team is committed to making your dreams               of living and working abroad a reality.
        .</p>
            </div>
            <div>
              <a href="tel: +1-614-707-6245"><h3>CALL US</h3></a>
              <hr />
              <p> 
Call us now to speak with our experienced immigration consultants and take the first step towards achieving your dreams.
/p>
            </div>
            <div>
              <h3>TRAVEL THE WORLD</h3>
              <hr />
              <p>
Diamond Visa and Immigration Services
Empowering your global journey with expert visa and immigration solutions.
   </p>
            </div>
            <div>
              <h3>TRAVELS</h3>
              <hr />
              <p>Our team is dedicated to providing personalized support and guidance throughout your visa application process.</p>
            </div>
           
        </div>
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
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, officia?',
    },
    {
      name: 'CHUKS GODWIN',
      position: 'MANAGER',
      image: 'images/man.jpg',
      social: [
        { icon: <FaFacebook />, link: 'https://facebook.com' },
        { icon: <FaTwitter />, link: 'https://twitter.com'  },
        { icon: <BsYoutube />, link: 'https://youtube.com'  },
        { icon: <FaInstagram />, link: 'https://instagram.com' },
        { icon: <MdEmail />, link: 'mailto:godwinchukss2.com' },
      ],
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, officia?',
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