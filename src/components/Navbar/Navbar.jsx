import react from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'

function Navbar(){
    return(
        <nav className='navbar' style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            alignContent: 'center',
            width:"100%",
            position: 'sticky',
            top: '0px',
            zIndex: "10",
            boxShadow: '1px 1px 5px 0px rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(2px) saturate(130%)',
            WebkitBackdropFilter: 'blur(2px) saturate(100%)',
            backgroundColor: 'rgba(10, 10, 10, 0.2)',
        }}>
        <span id='logo' style={{
            marginLeft: '55px',
            marginTop: '15px',
            fontSize: "250%",
            paddingBottom: "15px",
            fontFamily: "'Moon Dance', cursive"
        }}>
            Sohail
        </span>
            <ul id='nav-links'>
                <li ><a href="#home">Home</a></li>
                <li ><a href="#about-me-container">Education</a></li>
                <li ><a href="#skills-container">Skills</a></li>
                <li ><a href="#project-container">Projects</a></li>
                <li ><a href="#achievement-container">Achievements</a></li>
                <li ><a href="#footer">Contact Me</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;