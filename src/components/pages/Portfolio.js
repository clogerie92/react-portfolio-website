import React, {useState} from "react";
import ProjectCard from "./ProjectCard";
import screenshot1 from "./images/techtalk.png";
import screenshot2 from "./images/cheers.png";
import screenshot3 from "./images/chirp.png";
import screenshot4 from "./images/slicendice.png";
import screenshot5 from "./images/notehub.png";
import screenshot6 from "./images/weather.png";

function Portfolio () {
    const [projects] = useState([
        {
            "image": screenshot1,
            "title": "TechTalk",
            "description": "This is an application called TechTalk that is similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.",
            "repo": "https://github.com/clogerie92/TechTalk",
            "deploy": "https://morning-lake-99145.herokuapp.com/"
            
        },
        {
            "image": screenshot2,
            "title": "Cheers",
            "description": "Designed for those who love traveling and trying out local breweries, this application allows the user to enter a city of their choice and returns a 5 day weather forecast along with the top brewery searches in the city that the user has selected.",
            "repo": "https://github.com/kishanshah98/Travel-Guide",
            "deploy": "https://kishanshah98.github.io/Travel-Guide/"
            
        },
        {
            "image": screenshot3,
            "title": "Chirp",
            "description": "This application resembles a 'mock twitter' program in which one can create an account and make posts and comments to interact with others.",
            "repo": "https://github.com/micbrwn/Chirp",
            "deploy": "https://chirp-oneandonly.herokuapp.com/"
            
        },
        {
            "image": screenshot5,
            "title": "NoteHub",
            "description": "This is an application called NoteHub that can be used to write and save notes.",
            "repo": "https://github.com/clogerie92/NoteHub",
            "deploy": "https://the-note-hub.herokuapp.com/"
            
        },
        {
            "image": screenshot4,
            "title": "Slice-N-Dice",
            "description": "This application is a Pizza ordering app where users can sign up or login to place an order while the employee receives those orders.",
            "repo": "https://github.com/clogerie92/Slice-n-Dice",
            "deploy": "https://project3-slice-n-dice.herokuapp.com/"
            
        },
        {
            "image": screenshot6,
            "title": "Weather Dashboard App",
            "description": "A weather dashboard app that uses an api to retrieve weather data for all cities around the world.",
            "repo": "https://github.com/clogerie92/Weather-Dashboard-App",
            "deploy": "https://clogerie92.github.io/Weather-Dashboard-App/"
        }
    ])
    return (
        <div>
            <h2 className="center">Portfolio</h2>
            <div className="projects-container">
                {projects.map((project) => (
                    <ProjectCard project = {project} />
                ))}
            </div>
        </div>
    )
}

export default Portfolio;