import React from 'react'
import "./Home.css"
import Hero from '../componets/Hero'
import Advert from '../componets/Advert'
import MovingTrain from '../componets/MovingTrain'

const Home = () => {
  return (
    <div className='home'>
      <Hero/>
      <MovingTrain/>
      <Advert/>
      

       {/* <Background/> */}
      
      <div className="small-screen-feedback">
          </div>
          
     
      
      
    </div>
  )
}

export default Home