import React from "react";
import pdf from "../pages/images/Resume-1.pdf";

function Resume () {
    return (
        <div className="row resume-page">
            <h2 className="center" id="resume-header">Resume</h2>
             
            <a href={pdf} rel="noreferrer" target="_blank" className="center">
                <span id="resume-download">Download My Resume</span>
            </a>
                
                <h2 className="center">Proficiencies</h2> 
                <ul className="list-group proficiencies">
                    <li className="prof">HTML</li>
                    <li className="prof">CSS</li>
                    <li className="prof">JavaScript</li>
                    <li className="prof">Node.js</li>
                    <li className="prof">Express.js</li>
                    <li className="prof">REST API</li>
                    <li className="prof">MySQL</li>
                    <li className="prof">Sequelize</li>
                    <li className="prof">MongoDB</li>
                    <li className="prof">Mongoose</li>
                    <li className="prof">React</li>
                    <li className="prof">GraphQL</li>
                </ul>
        </div>
    );
};

export default Resume;