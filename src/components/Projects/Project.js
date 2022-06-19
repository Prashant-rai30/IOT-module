import React from "react"
import "./Project.css"
import ProjectBox from "./ProjectBox/ProjectBox"
import auto from "../../images/Project/auto.jpg"
import image1 from "../../images/Project/image1.jpg"
import ss1 from "../../images/Project/ss1.jpg"
import cv from "../../images/Project/cv.jpg"


function Project() {
    const projectData = [
        {
            image: [image1],
            title: "Object Detection: IOT module",
            description: [" Made an IOT module with help of Arduino Uno, a DHT11 sensor, and a buzzer. ",
                " Understood the working of various ports and components of Arduino and also got to know about DHT 11 sensor and how they work together",
                " The DHT 11 sensor has 2 components one sends sound waves and second one recieves those waves if they return back ",
                "This project will detect objects in its way if they are closer or about 50 cm distance, when it detects any object, the buzze installed in it will start making sound.   ",
            ],
            link: "https://google.com",
        },
        {
            image: [auto],
            title: "AutoMart: Digital Marketing",
            description: ["AutoMart CAR BUYING AND SELLING COMMUNITY where you can get old and new cars",
                " AutoMart is a wix website as well as a project made by me for the digital marketing course. It is made with the help of SEO tools and with help of various concepts.",
                " I got to know about various tools like google analytics, keywords finder, and details of SEO and ranking of webpages in google.",
                "This project is made to understand the working of Google search engine, how it ranks any website and how we can use different things to get into google search outcomes list ",
                
            ],
            link: "https://prashantraipm.wixsite.com/automart",
        },
        {
            image: [ss1],
            title: "LIFESTYLE STORE",
            description: ["  FRONT END DEVELOPMENT BY BOARD INFINITY ",
                "I have designed a full front-end of an online store with help of HTML, CSS, JavaScript and Bootstrap.",
                "Understood the working and use of front-end development with building blocks of the web (HTML, CSS and JS) ",
                "This project helped me to clear my concepts of front end development ",
                
            ],
            link: "https://github.com/Prashant-rai30/lifestyle-store",
        },
        {
            image: [cv],
            title: "Portfolio Website",
            description: ["I have made my Protfolio website on React ",
                "This website is made with various HTML, CSS, React and JS concepts like components, classes and props ",
                "With help of this portfolio website I got a clear understanding of all the Frontend development building blocks ",
                "This project helped me to clear my concepts of front end development ",
                
            ],
            link: " https://prashant-portfolio-30.web.app",
        },



    ];

    return (

        <div>
            <p className="projects_title">Projects</p>
            <div className="Block1">
                {projectData.map((value, key) => (
                    <ProjectBox image={value.image}
                        title={value.title}
                        description={value.description}
                        link={value.link} />

                ))}
            </div>
        </div>
    )
}
export default Project;