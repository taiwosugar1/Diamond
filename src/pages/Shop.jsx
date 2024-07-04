import React from 'react'
import { Link } from 'react-router-dom';
import "./Shop.css"

const Shop = () => {
  return (
    <div className='shop'>
    <div className="shop-button">
     <Link to={"/"}> <button>Home</button></Link>
     <Link to={"/contact"}> <button>Contact</button></Link>
     <Link to={"/about-us"}> <button>About</button></Link>
     </div>


    </div>
  )
}

export default Shop