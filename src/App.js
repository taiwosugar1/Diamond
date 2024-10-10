
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './componets/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import { FaLongArrowAltUp, FaPhone, FaWhatsapp } from 'react-icons/fa';
import Tour from './pages/Tour';
import TourList from './pages/TourList';
import Hotel from './pages/Hotel';
import Hotels from './pages/Hotels';
import { useEffect, useState } from 'react';
// index.js or App.js
import '@fontsource/montserrat'; // Defaults to weight 400
import '@fontsource/poppins'; // Defaults to weight 400


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the route changes
  }, [pathname]);

  return null;
};

const App = () => {
  const [showScrollButton, setShowScrollButton] = useState(false); 
  const [filteredCategory, setFilteredCategory] = useState('');
  const filterHotelsByCategory = (category) => {
    setFilteredCategory(category);
  };
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
      <BrowserRouter>

      <ScrollToTop /> {/* Ensure pages start at the top when navigating */}

          {/* Scroll to Top Button */}
          {showScrollButton && (
            <button className="scroll-to-top" onClick={scrollToTop}>
              <FaLongArrowAltUp />
            </button>
          )}


          <Navbar filterHotelsByCategory={filterHotelsByCategory} />
             
                <a href='tel: +1-614-707-6245'>
                 <div className='side-box'>
                    <h6><FaPhone/><br/> Diamond</h6>
                </div> </a>
                <a href='https://wa.me/message/NL7UY3M3Q6ZOG1'> 
                  <div className='side-box2'>
                    <h6><FaWhatsapp/><br/>Book Now</h6> 
                </div></a>

         <Routes>
          <Route path="/hotels" element={<Hotels filteredCategory={filteredCategory} />}/>
          <Route path="/" exact element={<Home/>}/>
          <Route path='hotel/:Id' element={<Hotel/>}/>
          <Route path='/tour/:id' element={<Tour/>}/>
          <Route path="/tourList" element={<TourList/>}/>
         <Route path='/about-us' element={<AboutUs/>}/>
         
         </Routes>
        
         
     </BrowserRouter>
      
    </div>
  );
}

export default App;
