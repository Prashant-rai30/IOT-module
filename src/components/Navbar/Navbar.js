import React from "react";
import "./Navbar.css"// css file is called
function Navbar() {

    var name = "<PR />" // we took a variable for <PR /> becoz 
    // it seems like component to js and since it is not component
    // so we use smart wa of using js

    return (
        <div>
            <div className="navbar_container">
                <div className="navbar_left">
                    {name}
                </div>
                <div className="navbar_right">
                    <p><a style={{ textDecoration: "none", color: "white" }} href="#about">About</a></p>
                    <p><a style={{ textDecoration: "none", color: "white" }} href="#techstack">Tools</a></p>
                    <p><a style={{ textDecoration: "none", color: "white" }} href="#project">Projects</a></p>
                    {/* <p><a style={{ textDecoration: "none", color: "white" }} href="#experience">Experience</a></p> */}
                    <p><a style={{ textDecoration: "none", color: "white" }} href="\static\media\cv.pdf" download="PrashantRai.pdf">Resume</a></p>
                    <p><a style={{ textDecoration: "none", color: "white" }} href="#footer">Socials</a></p>
                </div>
            </div >
        </div>


    )
}

export default Navbar;

//{name} is used to call name variable of js inside in html