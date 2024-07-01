import React from 'react'
import logo from "../../assets/logo.png"
import { FaFacebook ,FaInstagram ,FaTiktok,FaWhatsapp,FaYoutube } from "react-icons/fa";
import './footer.css'
const Footer = () => {
  return (
    <div className="footer-content">
        <img src={logo} alt="" />
        <div className="icons">
        <a href="https://www.facebook.com/profile.php?id=100063805845418"><FaFacebook className='f-icon'/> </a> 
        <a href="https://www.instagram.com/jr_designweb?igsh=MXZzNzY0N2Y2ajB3aQ=="> < FaInstagram className='f-icon' /></a>
        <FaWhatsapp className='f-icon' />
        <a href="https://www.tiktok.com/@jasyjoja?_t=8liP773MlQT&_r=1">  <FaTiktok  className='f-icon'/></a>
        </div>
    </div>
  )
}

export default Footer
