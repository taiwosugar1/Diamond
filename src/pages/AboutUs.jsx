
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
          <h2>DIAMOND VISA</h2>
          <ul>
            <Link to={"/shop"}><li> Shop</li></Link>
            <li onClick={handleToggle}>Booking</li>
            {isOpen && (
              <div className='about-details-drop'> details</div>
            )}
          </ul>
        </div>
        <h1>About Us</h1>
        <p>
Welcome to Diamond Visa Services, your trusted partner in visa processing. Established with the mission to simplify and expedite the visa application processes. 
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
                <div key={index}>
                  {socialLink.icon}
                </div>
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
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, numquam dolore. Doloribus illo rerum beatae.</p>
            </div>
            <div>
              <h3>LATEST NEWS</h3>
              <hr />
              <div className="latest-news-container">
                <div className="latest-news-box">
                  <h5>19 <br />jan</h5>
                  <p>Welcome to Flatsome</p>
                </div>
                <div className="latest-news-box">
                  <h5>19 <br />jan</h5>
                  <p>Welcome to Flatsome</p>
                </div>

              </div>
              </div>
            <div>
              <h3>TRAVELS</h3>
              <hr /></div>
            <div>
              <h3>SIGNUP FOR NEWSLETTER</h3>
              <hr />
              </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;

const staffMembers = [
    {
      name: 'CHUKS GODWIN',
      position: 'CEO/ FOUNDER',
      image: 'images/man.jpg',
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
      name: 'JANE DOE',
      position: 'MANAGER',
      image: 'images/woman.jpg',
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
      name: 'MIKE DOE',
      position: 'ADMIN',
      image: 'images/man2.jpg',
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
      name: 'RICHARD MILE',
      position: "TRANSPORTATION",
      image: 'images/man3.jpg',
      social: [
        { icon: <FaFacebook />, link: 'https://facebook.com' },
        { icon: <FaTwitter />, link: 'https://twitter.com'  },
        { icon: <BsYoutube />, link: 'https://youtube.com'  },
        { icon: <FaInstagram />, link: 'https://instagram.com' },
        { icon: <MdEmail />, link: 'mailto:email@example.com' },
      ],
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, officia?',
    },
    // Add more staff members here
  ];