import react from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'

function Navbar(){
    return(
        <nav>
        <span id='logo'>
        <FontAwesomeIcon icon={faUser} id='user-icon'/>
        </span>
            <ul id='nav-links'>
            
                <li ><a href="#home">Home</a></li>
                <li ><a href="#about-me-container">About</a></li>
                <li ><a href="#skills-container">Skills</a></li>
                <li ><a href="#project-container">Project</a></li>
                <li ><a href="#achievement-container">Achivements</a></li>
                <li ><a href="#footer">Contact Me</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;