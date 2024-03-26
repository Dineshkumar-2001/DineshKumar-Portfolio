import React from "react";
import { Element } from 'react-scroll';
import './Skills.css'


function Skills() {



    return (

        <Element className="skillContainer" id='skill'>

            <div className="skillContainer_Head">
                <h2>SKILLS AND TOOLS</h2>

            </div>

            <div className="skills_Part">

                <span>HTML</span>
                <span>CSS</span>
                <span>JAVA SCRIPT</span>
            </div>

            <div className="skills_Part">

                <span>REACT</span>
                <span>NODE</span>
                <span>SQL</span>
            </div>

            <div className="skills_Part">

                <span>VS CODE</span>
                <span>GIT</span>
                <span>POSTMAN</span>
            </div>



        </Element>
    )


}

export default Skills;