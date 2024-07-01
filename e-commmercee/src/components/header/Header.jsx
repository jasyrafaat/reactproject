import React from 'react'
import './header.css'
import Typewriter from 'typewriter-effect';
import header from '../../assets/header.png';

const Header = () => {
  return (
    <div className='header'>
      <Typewriter
      className='Typewriter'
  options={{
    strings: ['Welcome To Our E-Commerce', 'Best Shoping Ever Here'],
    autoStart: true,
    loop: true,
  }}
/>
 <div className="header-content">
    <div className="header-left">
        <h2>The Best Note Book <span>Collection 2024</span></h2>
        <h3>discount : 30%</h3>
        <a href="#products">
        <button>Shop Now</button>
        </a>
    </div>
    <div className="header-right">
        <img src={header} alt="header" />
    </div>
 </div>
    </div>
  )
}

export default Header
