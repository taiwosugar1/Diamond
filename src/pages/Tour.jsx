import React from 'react'
import { Link } from 'react-router-dom';
import "./Tour.css"

const Shop = () => {
  return (
    <div className='tour'>
    <div className="tour-button">
     <Link to={"/"}> <button>Home</button></Link>
     <Link to={"/contact"}> <button>Contact</button></Link>
     <Link to={"/about-us"}> <button>About</button></Link>
     </div>


    </div>
  )
}

export default Shop