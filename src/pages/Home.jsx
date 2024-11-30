import React from 'react'
import "./Home.css"
import Hero from '../componets/Hero'
import Advert from '../componets/Advert'
import MovingTrain from '../componets/MovingTrain'
import Country from '../componets/Country'
import { Link } from 'react-router-dom'
import WorkingProcess from '../componets/WorkingProcess'
import TestPreparation from '../componets/TestPreparation'

const Home = () => {
  return (
    <div className='home'>
      <Hero/>
      <MovingTrain/>
      <div className="about-ssection">
      <div className="content-box" data-aos="zoom-in">
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
      <div className="content-box" data-aos="zoom-in">
        <p className="abbout-title">// COUNTRY //</p>
        <h2 className="abbout-heading">
        Immigration Choose Your Country
        </h2>
        <p className='desc'>Our expert consultants evaluate your eligibility and guide you through the most suitable visa options based on your qualifications, skills, and</p>
         <Link to={"/visa"} className='read-more'>Read More</Link>

      </div>
    </div>
      <Country/>
      
      <div className="content-box" data-aos="zoom-in">
        <p className="abbout-title">// OUR SERVICE AREAS //</p>
        <h2 className="abbout-heading">
        Visa & Immigration Consulting Firm In US
        </h2>
        <p className='desc'>We provide meticulous support in preparing and organizing the required documents, ensuring a smooth and error-free submission process.We provide meticulous support in preparing</p>
         <Link to={"/sevices"} className='read-more'>Read More</Link>

      </div>
      
      <div className="down-sec">
        <img src="/images/h2.png" alt="" className='down-sec-img one'/>
        <img src="/images/h1.png" alt="" className='down-sec-img two'/>

          </div>
          
     
      <WorkingProcess/>

      <TestPreparation/>
      
    </div>
  )
}

export default Home