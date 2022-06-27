import React from "react";

import "./ProjectBox.css";

function ProjectBox(props) {
    return (
        <div className="pro_box_container">
            {/* {project Image} */}
            <div className="pro_box_img_container">
                <img src={props.image} alt=""/>
            </div>
            {/* {project title} */}
            <p className="pro_box_title">{props.title}</p>
            {/* {project des} */}
            <div className="pro_box_des">
                {props.description.map((value,key)=>(
                    <p>{value}</p>
                    )
                )}

            </div>
            {/* Project link */}
            <p className="pro_box_link"><span>LINK -</span><a href={props.link} target="_blank"> {props.link}</a></p>
        </div>

    )
}
export default ProjectBox;