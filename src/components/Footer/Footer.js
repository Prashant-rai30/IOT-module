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
      <a className='listt' href="mailto: prashantraipm@gmail.com" target="_blank_"> <img src={gmail}  alt="email image" /></a>
      <a  className='listt' href="https://github.com/Prashant-rai30" target="_blank_"><img  src={github} alt="github image" /></a>
      <a  className='listt' href="https://www.linkedin.com/in/prashantrai30/" target="_blank_"><img  src={linkedin} alt="linked image" /></a>
      <a  className='listt' href="https://www.facebook.com/profile.php?id=100006415593995"target="_blank_"><img  src={facebook} alt="fb image" /></a>
      <a  className='listt' href="https://www.instagram.com/_prashant_rai._/ " target="_blank_"><img src={instagram} alt="insta image" /></a>
      <a  className='listt' href="https://prashantraipm.wixsite.com/automart" target="_blank_" ><img  src={wix} alt="wix image" /></a>
         </div></div>
  )
}
export default Footer;
