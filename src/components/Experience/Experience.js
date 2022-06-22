import React from "react"
import "./Experience.css"
import ExperienceBox from "./ExperienceBox/ExperienceBox";
import react from "../../images/TechStack/react.png";
import js from "../../images/TechStack/jss.png"
import html from "../../images/TechStack/html.png"

function Experience(){
    
    const experienceData=[
        {
            title:"Certificates",
            sentences:[
                "FRONT END DEVELOPMENT(BOARD INFINITY)  ",
                "Learn C++ BEGINEER TO ADVANCE",
                "INTRESTS",
                "PLAYING ONLINE GAMES",
                "BADMINTON",
                ""

                
                // "bjbcskbjcqkjbcfqejlqbfjbqs cjcfqbbclqebqbcblfbfcbqbqbdjbfbqfjbfcsecdalkw   idhhfqoifbjqbefm xcalndiqowdbjdjqf ",
                // "bjbcskbjcqkjbcfqejlqbfjbqs cjcfqbbclqebqbcblfbfcbqbqbdjbfbqfjbfcsecdalkw   idhhfqoifbjqbefm xcalndiqowdbjdjqf ",
                // "bjbcskbjcqkjbcfqejlqbfjbqs cjcfqbbclqebqbcblfbfcbqbqbdjbfbqfjbfcsecdalkw   idhhfqoifbjqbefm xcalndiqowdbjdjqf ",
            ],
            subtitle:"Tech Used",
            images:[react,js,html],
            
        },
        {
            title:"Education",
            sentences:[
                "bjbcskbjcqkjbcfqejlqbfjbqs cjcfqbbclqebqbcblfbfcbqbqbdjbfbqfjbfcsecdalkw   idhhfqoifbjqbefm xcalndiqowdbjdjqf ",
                "bjbcskbjcqkjbcfqejlqbfjbqs cjcfqbbclqebqbcblfbfcbqbqbdjbfbqfjbfcsecdalkw   idhhfqoifbjqbefm xcalndiqowdbjdjqf ",
                "bjbcskbjcqkjbcfqejlqbfjbqs cjcfqbbclqebqbcblfbfcbqbqbdjbfbqfjbfcsecdalkw   idhhfqoifbjqbefm xcalndiqowdbjdjqf ",
                "bjbcskbjcqkjbcfqejlqbfjbqs cjcfqbbclqebqbcblfbfcbqbqbdjbfbqfjbfcsecdalkw   idhhfqoifbjqbefm xcalndiqowdbjdjqf ",
                "bjbcskbjcqkjbcfqejlqbfjbqs cjcfqbbclqebqbcblfbfcbqbqbdjbfbqfjbfcsecdalkw   idhhfqoifbjqbefm xcalndiqowdbjdjqf ",
            ],
            subtitle:"Tech Used",
            images:[react,js,html],
        },
        {
            title:"Achivements",
            sentences:[
                "bjbcskbjcqkjbcfqejlqbfjbqs cjcfqbbclqebqbcblfbfcbqbqbdjbfbqfjbfcsecdalkw   idhhfqoifbjqbefm xcalndiqowdbjdjqf ",
                "bjbcskbjcqkjbcfqejlqbfjbqs cjcfqbbclqebqbcblfbfcbqbqbdjbfbqfjbfcsecdalkw   idhhfqoifbjqbefm xcalndiqowdbjdjqf ",
                "bjbcskbjcqkjbcfqejlqbfjbqs cjcfqbbclqebqbcblfbfcbqbqbdjbfbqfjbfcsecdalkw   idhhfqoifbjqbefm xcalndiqowdbjdjqf ",
                "bjbcskbjcqkjbcfqejlqbfjbqs cjcfqbbclqebqbcblfbfcbqbqbdjbfbqfjbfcsecdalkw   idhhfqoifbjqbefm xcalndiqowdbjdjqf ",
                "bjbcskbjcqkjbcfqejlqbfjbqs cjcfqbbclqebqbcblfbfcbqbqbdjbfbqfjbfcsecdalkw   idhhfqoifbjqbefm xcalndiqowdbjdjqf ",
            ],
            subtitle:"Tech Used",
            images:[react,js,html],
        }
    ]


return(

    
    <div id="experience"className="ex_container" >
        <p className="ex_title"></p>
        <div className="ex_experiencebox_container">
            {experienceData.map((value,key)=>(
            <ExperienceBox title={value.title} 
            sentences={value.sentences}
             subtitle={value.subtitle}
             images={value.images} />
))}

        </div>
    </div>
)
}
export default Experience;