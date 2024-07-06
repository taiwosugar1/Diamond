
// import { BrowserRouter, Route } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './componets/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';

import AboutUs from './pages/AboutUs';
import { FaVaadin } from 'react-icons/fa';
import Shop from './pages/Shop';

function App() {
  return (
    <div className="App">
            <BrowserRouter>
       <Navbar/>
       <div className='side-box'>
        
        <a href='tel:+1234567890'><h6><FaVaadin/><br/> Diamond</h6> </a>
       </div>
       <div className='side-box2'>

       <a href='tel:+1234567890'><h6>Book <br/>Now</h6> </a>
       </div>
      
         <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path="/contact" element={<Contact/>}/>
         <Route path='/about-us' element={<AboutUs/>}/>
         </Routes>
         
     </BrowserRouter>
      
    </div>
  );
}

export default App;
