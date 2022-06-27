import React from 'react'
import "./Footer.css"
import facebook from "../../images/footer/facebook.png"; 
import instagram from "../../images/footer/instagram.png"; 
import wix from "../../images/footer/wix.png"; 
import gmail from "../../images/footer/gmail.png";
import linkedin from "../../images/footer/linkedin.png"; 
import github from "../../images/footer/github.png";
 function Footer() {
  return (
    <div id= "footer"className='footer'>
      <p className='head'>Socials</p>
      <div className='list'>
      <img  href="" src={gmail} alt="email image" />
      <img href="" src={github} alt="email image" />
      <img href="" src={linkedin} alt="email image" />
      <img href="" src={facebook} alt="email image" />
      <img href="" src={instagram} alt="email image" />
      <img href="" src={wix} alt="email image" />
         </div></div>
  )
}
export default Footer;
