import React from 'react'
import Background from '../componets/Background'
import Footer from '../componets/Footer';
import Feedback from '../componets/Feedback';
import "./Home.css"

const Home = () => {
  return (
    <div className='home'>

       <Background/>
      
      <div className="small-screen-feedback">
          <Feedback/>
          </div>
          
       <Footer/>
      
      
    </div>
  )
}

export default Home