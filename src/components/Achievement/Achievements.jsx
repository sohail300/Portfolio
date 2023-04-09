import react from 'react';
import './Achievements.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Achievements(){
    return(
        <div id="achievement-container">
            <h2>Achievements</h2>
            <div id="achievment-btn-container">
            <button className='achievment-btn'>Experience</button>
            <button className='achievment-btn'>Open Source</button>
            <button className='achievment-btn'>Community Work</button>
            </div>

            <div id="achievment-desc">
            <div id='experience' className='achievement'>
            <p><FontAwesomeIcon icon={faStar} style={{color: "#ffc800",}} /> Contributed in the implementation of backend in the college fest website.</p>
            <p><FontAwesomeIcon icon={faStar} style={{color: "#ffc800",}} /> Lead a group of 4 students in a hackathon.</p>
            </div>
            
            <div id='open-source' className='achievement'>
            <p><FontAwesomeIcon icon={faStar} style={{color: "#ffc800",}} /> Won a Open Source contest HackSquad organised by Novu.</p>
            <p><FontAwesomeIcon icon={faStar} style={{color: "#ffc800",}} /> Designed UI for this website.</p></div>

            <div id='community-work' className='achievement'>
            <p><FontAwesomeIcon icon={faStar} style={{color: "#ffc800",}} /> Organised workshops regarding Cyber Security in college.</p>
            <p><FontAwesomeIcon icon={faStar} style={{color: "#ffc800",}} /> Wrote technical blogs on Hashnode.</p></div>
            </div>
        </div>
    );
}

export default Achievements;