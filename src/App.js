
import { BrowserRouter as  Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './componets/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import { FaLongArrowAltUp, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Footer from './componets/Footer';
import Contact from './componets/contact/Contact';
import { AiFillMessage } from 'react-icons/ai';
import MessageIcon from './componets/MessageIcon';
import Contact1 from './componets/contact/Contact1';


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the route changes
  }, [pathname]);

  return null;
};

const App = () => {
  const [showScrollButton, setShowScrollButton] = useState(false); 
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };



 

  return (
    <div className="App">
      <Router>

      <ScrollToTop /> {/* Ensure pages start at the top when navigating */}

          {/* Scroll to Top Button */}
          {showScrollButton && (
            <button className="scroll-to-top" onClick={scrollToTop}>
              <FaLongArrowAltUp />
            </button>
          )}


          <Navbar  />
             
                {/* <a href='tel: +1-614-707-6245'>
                 <div className='side-box'>
                    <h6><FaPhone/><br/> Diamond</h6>
                </div> </a>
                <a href='https://wa.me/message/NL7UY3M3Q6ZOG1'> 
                  <div className='side-box2'>
                    <h6><FaWhatsapp/><br/>Book Now</h6> 
                </div></a> */}

                <a href='/contact'> 
                 <MessageIcon/>
               </a>

                

         <Routes>
          <Route path="/" exact element={<Home/>}/>
         <Route path='/about' element={<AboutUs/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/contact1' element={<Contact1/>}/>
         
         </Routes>
         <Footer/>
        
         
     </Router>
      
    </div>
  );
}

export default App;
