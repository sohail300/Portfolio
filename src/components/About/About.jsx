import react from 'react';
import './About.css'
import SVG from '../subcomponents/SVG.jsx'

function About(){
    return(
        <div id='about-me-container'>
            <img src={require('../images/about.jpeg')} alt="About png"/>
            <div id="about-me">
            <h2>About Me</h2>
            {/* <button id='education-btn'>Education</button> */}
                
            <SVG />
            <div id="education-desc">
                <div className="desc">Completed my 10th from De Nobili School, Koradih with 89.8%</div>
                <div className="desc">Completed my 12th from Sree Ayyappa Public School, Bokaro with 92.6%</div>
                <div className="desc">Currently pursuing B.Tech in CSE at IIIT Bhagalpur</div>
            </div>
            </div>
        </div>

    );
}

export default About;