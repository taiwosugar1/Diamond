
// import { BrowserRouter, Route } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './componets/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import Tour from './pages/Tour';
import TourList from './pages/TourList';

function App() {
  return (
    <div className="App">
            <BrowserRouter>
       <Navbar/>
        <a href='tel: +1-614-707-6245'>
          <div className='side-box'>
            <h6><FaPhone/><br/> Diamond</h6>
          </div> </a>
       <a href='https://wa.me/message/NL7UY3M3Q6ZOG1'> 
          <div className='side-box2'>
            <h6><FaWhatsapp/><br/>Book Now</h6> 
          </div></a>
      
         <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path='/tour/:id' element={<Tour/>}/>
          <Route path="/tourList" element={<TourList/>}/>
         <Route path='/about-us' element={<AboutUs/>}/>
         </Routes>
         
     </BrowserRouter>
      
    </div>
  );
}

export default App;
