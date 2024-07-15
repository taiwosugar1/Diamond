import React from 'react'
import Background from '../componets/Background'
import Footer from '../componets/Footer';
import NewsletterComponent from '../componets/NewsletterComponent';
import "./Home.css"

const Home = () => {
  return (
    <div className='home'>

       <Background/>
      
      <div className="small-screen-feedback">
          <NewsletterComponent/>
          </div>
          
       <Footer/>
      
      
    </div>
  )
}

export default Home