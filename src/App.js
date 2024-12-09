import { BrowserRouter, Route, Routes, useLocation, Link } from 'react-router-dom';
import './App.css';
import Navbar from './componets/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import { FaLongArrowAltUp} from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Footer from './componets/Footer';
import Contact from './componets/contact/Contact';
import Contact1 from './componets/contact/Contact1';
import VisaList from './componets/VisaList';
import Service from './componets/Service';
import AosAnimation from './componets/AosAnimation';
import SingleVisa from './componets/SingleVisa';
import VisaForm from './componets/VisaForm';
import AdvertDetails from './componets/AdvertDetails';
import SingleService from './componets/SingleServices';
import Team from './componets/Team';
import NewsMedia from './componets/NewsMedia';
import WorldMediaPartner from './componets/WorldMediaPartner';
import SingleCountry from './componets/SingleCountry';
import { AiFillMessage } from 'react-icons/ai';
import Login from './componets/auth/Login';
import Signup from './componets/auth/SignUp';
import ResetPassword from './componets/auth/ResetPassword';
import ProtectedRoute from './componets/auth/ProtectedRoute';
import { AuthProvider } from './AuthContext';
import UserProfile from './componets/UserProfile';
import AdminDashboard from './componets/admin/AdminDashboard';
import Preloader from './componets/Preloader';
import ScrollToTop from './componets/ScrollToTop';

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="App">
    <BrowserRouter>
      <AuthProvider>
          <ScrollToTop /> {/* This works with Router */}
            {showScrollButton && (
              <button className="scroll-to-top" onClick={scrollToTop}>
                <FaLongArrowAltUp />
              </button>
            )}

            <AosAnimation />
            <Navbar />

            <Link to='/contact' className="fixed-message-icon">
              <AiFillMessage className="message-icon" />
            </Link>
            <Preloader>   {/*preloader  wrapping the routes */}
             <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/reset" element={<ResetPassword />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route path='/about' element={<AboutUs />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/contact1' element={<Contact1 />} />
              <Route path="/visa" exact element={<VisaList />} />
              <Route path="/services" exact element={<Service />} />
              <Route path="/visa/:visaType" element={<SingleVisa />} />
              <Route
                path="/visa-form"
                element={
                  <ProtectedRoute>
                    <VisaForm />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin"
                element={
                  <ProtectedRoute>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />
              <Route path="/service-details/:serviceId" element={<AdvertDetails />} />
              <Route path="/services/:serviceId" element={<SingleService />} />
              <Route path="/team" element={<Team />} />
              <Route path="/news-media" exact element={<NewsMedia />} />
              <Route path="/world-media" exact element={<WorldMediaPartner />} />
              <Route path="/country/:id" element={<SingleCountry />} />
             </Routes>
            </Preloader>

            <Footer />
      </AuthProvider>
    </BrowserRouter>

    </div>
  );
};

export default App;

