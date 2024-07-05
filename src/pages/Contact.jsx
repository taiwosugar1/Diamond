import React from 'react'
import { Link } from 'react-router-dom';
import "./Contact.css"

const Shop = () => {
  return (
    <div className='contact'>
    <div className="contact-button">
     <Link to={"/"}> <button>Home</button></Link>
     <Link to={"/contact"}> <button>Shop</button></Link>
     <Link to={"/about-us"}> <button>About</button></Link>
     </div>


    </div>
  )
}

export default Shop