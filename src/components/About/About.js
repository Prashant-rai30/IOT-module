import React from "react";
import "./About.css";
import github from "../../images/github.png"
import lin from "../../images/lin.png"
import pic from "../../images/pic.png"

function About() {
    return(
        <>
        <div id="about" className="pic">
        <img src={pic} width="250px" height="259px" border-Radius="50" alt=""/>
    </div>
        <div className="about_container">
            <p className="about_text1"><span className="highlighted_text">Hi,</span > my name is </p>
            <p className="about_text2">Prashant Rai</p>
            
            <p className="about_text3">I am a <span className="highlighted_text">B.Tech</span> CSE student at <span className="highlighted_text">LPU</span></p>
            <p className="about_description">I am a third-year student pursuing B.Tech in Computer Science and Engineering major in LPU. I am an innovative, hard-working, and a time punctual person. I enjoy doing front-end 
            development work and am also a technology enthusiastic person. I am also having some good knowledge in the field of digital marketing and also have done some projects in IOT out of eagerness.</p>
             <div>
                 <a href="https://github.com/Prashant-rai30" target="_blank_"> <img src={github} alt="github image"/></a>
                 <a href="https://www.linkedin.com/in/prashantrai30/" target="_blank_"><img src={lin} alt="linked In image"/></a>
             </div>
             <a href="mailto: prashantraipm@gmail.com">
             <button className="about_button">
                 Get in Touch
             </button>
             </a>
        
        
        </div>
        </>

    )
}
export default About;
