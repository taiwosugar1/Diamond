import React from 'react'
import "./Home.css"
import Hero from '../componets/Hero'
import Advert from '../componets/Advert'
import MovingTrain from '../componets/MovingTrain'
import Country from '../componets/Country'

const Home = () => {
  return (
    <div className='home'>
      <Hero/>
      <MovingTrain/>
      <Advert/>
      <Country/>
      

       {/* <Background/> */}
      
      <div className="small-screen-feedback">
          </div>
          
     
      
      
    </div>
  )
}

export default Home