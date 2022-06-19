import React from "react";
import "./Navbar.css"// css file is called
import "../About/About"




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
                    <p>About</p>
                    <p>Tools</p>
                    {/* <p>Experience</p> */}
                    <p>Project</p>
                    <p>Resume</p>
                </div>
            </div >
            <hr />
        </div>


    )
}

export default Navbar;

//{name} is used to call name variable of js inside in html