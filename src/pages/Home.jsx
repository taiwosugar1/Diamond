import React from 'react'
import Background from '../componets/Background'
import Footer from '../componets/Footer';
import "./Home.css"

const Home = () => {
  return (
    <div className='home'>

       <Background/>
       <div style={{bottom:"0", left:"0"}}>
       <Footer/>
       </div>
      
    </div>
  )
}

export default Home