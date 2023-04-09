import react from 'react';
import './Skills.css'
import Java from '../icons/Java';
import Javascript from '../icons/Javascript';
import Python from '../icons/Python';
import HTML from '../icons/HTML';
import CSS from '../icons/CSS';
import React from '../icons/React';
import NodeJS from '../icons/NodeJS';
import Express from '../icons/Express';
import Git from '../icons/Git';
import Notion from '../icons/Notion';
import Github from '../icons/Github';
import Netlify from '../icons/Netlify';
import MongoDB from '../icons/MongoDB';
import MySQL from '../icons/MySQL';
import Firebase from '../icons/Firebase';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faJava} from '@fortawesome/free-solid-svg-icons'
// import { faPython } from '@fortawesome/free-solid-svg-icons'
// ,faSquareJs,faHtml5,faCss3Alt,faPython 

function Skills(){
    return(
        <div id="skills-container">
        <h2>Skills</h2>
        <div id="skills-btn-container">
        <button className='skills-btn'>Language</button>
        <button className='skills-btn'>Framework</button>
        <button className='skills-btn'>Tools</button>
        <button className='skills-btn'>Platform</button>
        <button className='skills-btn'>Databases</button>
        </div>
        <div id="language-icon" class="icon">
        <Java />
        <Javascript />
        <Python />
        <HTML />
        <CSS />
        </div>

        <div className="framework-icon" class="icon">
        <React />
        <NodeJS />
        <Express />
        </div>

        <div className="tools-icon" class="icon">
        <Git />
        <Notion />
        </div>
        
        <div className="platform-icon" class="icon">
        {/* <Heroku /> */}
        <Netlify />
        <Github />
        </div>

        <div className="databases-icon" class="icon">
        <MongoDB />
        <MySQL />
        <Firebase />
        </div>
        </div>
    );
}

export default Skills;