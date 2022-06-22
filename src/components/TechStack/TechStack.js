import React from "react"
import "./TechStack.css"
import react from "../../images/TechStack/react.png";
import github from "../../images/TechStack/github.png";
import html from "../../images/TechStack/html.png";
import jss from "../../images/TechStack/jss.png";
import cpp from "../../images/TechStack/cpp.png";
import boot from "../../images/TechStack/boot.png";
import TechStackIcon from "./TechStackIcon";
function TechStack() {
    const techstackData =
        [{
            iconImage: react,
            iconAltProperty: "reactImage",
            iconName: 'React',
        },
        {
            iconImage: jss,
            iconAltProperty: "jsImage",
            iconName: 'Javascript',
        },
        {
            iconImage: html,
            iconAltProperty: "HtmlImage",
            iconName: 'HTML',
        },
        ]
        const techstackData2 =
        [{
            iconImage: cpp,
            iconAltProperty: "cpp",
            iconName: 'C++',
        },
        {
            iconImage: github,
            iconAltProperty: "github",
            iconName: 'Github',
        },
        {
            iconImage: boot,
            iconAltProperty: "bootstrapImage",
            iconName: 'bootstrap',
        },
        ]
        function showIcon(value){
            return(
                <div className="techstack_image_element_container">
                            <a><img src={value.iconImage}  alt={value.iconAltProperty} /></a>
                            <p>{value.iconName}</p>
                            </div>

            );
        }
    return (
        
        <div id="techstack" className="techstack_container">
            <p className="techstack_title">TechStack</p>
            <div className="techstack_images_row_container">
                <div className="techstack_image_container_row1">
                {/* this map funct is used to remove
                     duplicacy and complexity of code */}
                    {techstackData.map((value,key)=>(
                        // <div className="techstack_image_container">
                        //     <img src={value.iconImage}  alt={value.iconAltProperty} />
                        //     <p>{value.iconName}</p>
                        //     </div>
                            <TechStackIcon data={value} />                    )
                    )
                    }
                    </div>
                    {/* <div className="techstack_image_element_container">

                        <img src={react} alt="ReactImage" />
                        <p>React</p>
                    </div>
                    <div className="techstack_image_element_container">
                        <img src={jss} alt="jsImage" />
                        <p>JavaScript</p>
                    </div>
                    <div className="techstack_image_element_container">
                        <img src={html} alt="htmlImage" />
                        <p>HTML</p>
                    </div>
                </div> */}
                <div className="techstack_image_container_row1">
                {techstackData2.map((value,key)=>(
                        // <div className="techstack_image_container">
                        //     <img src={value.iconImage}  alt={value.iconAltProperty} />
                        //     <p>{value.iconName}</p>
                        //     </div>
                        showIcon(value)
                            
                    )
                    )
                    }
                    {/* <div className="techstack_image_element_container">

                        <img src={cpp} alt="cppImage" />
                        <p>C++</p>
                    </div>
                    <div className="techstack_image_element_container">
                        <img src={boot} alt="bootImage" />
                        <p>Bootstrap</p>
                    </div>
                    <div className="techstack_image_element_container">
                        <img src={github} alt="githubImage" />
                        <p>Github</p>
                    </div> */}

                </div>
            </div>
        </div>
     
);
                }
export default TechStack;