import React from 'react'
import "./Home.css"
import Hero from '../componets/Hero'
import Advert from '../componets/Advert'
import MovingTrain from '../componets/MovingTrain'
import Country from '../componets/Country'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
      <Hero/>
      <MovingTrain/>
      <div className="about-ssection">
      <div className="content-box">
        <p className="abbout-title">// ABOUT OUR COMPANY //</p>
        <h2 className="abbout-heading">
          Experts In Professional Immigration & Visa Processing
        </h2>
      </div>
      <div className="image-box">
        <img
          src="/images/ac.png"
          alt="About our company"
          className="about-image"
        />
      </div>
    </div>
      <Advert/>
      <div className="about-ssection">
      <div className="content-box">
        <p className="abbout-title">// COUNTRY //</p>
        <h2 className="abbout-heading">
        Immigration Choose Your Country
        </h2>
        <p className='desc'>Our expert consultants evaluate your eligibility and guide you through the most suitable visa options based on your qualifications, skills, and</p>
         <Link to={"/visa"} className='read-more'>Read More</Link>

      </div>
    </div>
      <Country/>
      

       {/* <Background/> */}
      
      <div className="small-screen-feedback">
          </div>
          
     
      
      
    </div>
  )
}

export default Home