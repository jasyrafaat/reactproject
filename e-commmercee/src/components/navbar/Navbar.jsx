import React, { useEffect, useState } from 'react'
import './navbar.css'
import logo from "../../assets/logo.png"
import { FaPhoneAlt } from "react-icons/fa";
import { FiMoon } from "react-icons/fi";
import { AiOutlineShopping } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { BsFillSunFill } from "react-icons/bs";



const Navbar = ({cartItems ,dark ,isDark}) => {
 
  



useEffect(() => {
  window.onscroll = function () {
    if (window.scrollY > 0){
      document.querySelector(".navbar").style =
      "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;";
    }else{
      document.querySelector(".navbar").style =
      "box-shadow: none";
    }
  }
  
}, [])





  return (
   
        <div className="navbar">
        <div className="logo">
        <Link to='/'>
          <img src={logo} alt="logo" />
        </Link>
        <p>JR Design</p>
        </div>

        <div className="call">
      <FaPhoneAlt/>
      <p>01012335874</p>
        </div>

       <div className="navbar-icons">
        {dark ? <BsFillSunFill onClick={isDark} className='moon-icon'/>
      :  <FiMoon onClick={isDark} className='moon-icon'/>}
       
       </div>

       <div className="shopping">

        <Link to='/cart'>
        <AiOutlineShopping className='shopping-icon'/>

        </Link>
       <span>{cartItems.length}</span>
       </div>
     </div>
    
  )
}

export default Navbar
