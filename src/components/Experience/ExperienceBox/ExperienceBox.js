import React from "react"
import "./ExperienceBox.css"

function ExperienceBox({title,sentences,subtitle,images}){
    return(
// title- String
// sentences-array of String
// images-array of images
// subtitle-string
        <div className="ex_box_container">
            <p className="ex_box_title">{title}</p>
            <div className="ex_box_sentences">
                {sentences.map((value,key)=>(
                    <p>{value}</p>
                ))}
            </div>
            <p className="ex_box_subtitle">{subtitle}</p>
            <div className="ex_box_images">
                {images.map((value,key)=>(
                    <img src={value} />
                ))}
            </div>
        </div>
    )
}
export default ExperienceBox;