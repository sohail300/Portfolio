import react from 'react';
import './About.css'

function About(){
    return(
        <div id='about-me-container'>
            <img src={require('../images/about.jpeg')} alt="About png"/>
            <div id="about-me">
            <h2>About Me</h2>
                <button id='education-btn'>Education</button>
                
        <svg height="150" width="900" id="education">
            <circle cx='100' cy='50' r='40' fill="#ffffff"/>
            <text x="85" y="120" fill="white">10th</text>
            <text x="80" y="58" fill="black">2018</text>
  
            <line x1="140" y1="50" x2="475" y2="50" stroke-width="3" stroke="#ffffff" />
  
            <circle cx='475' cy='50' r='40' fill="#ffffff"/>
            <text x="460" y="120" fill="white">12th</text>
            <text x="453" y="58" fill="black">2020</text>
  
            <line x1="515" y1="50" x2="850" y2="50" stroke-width="3" stroke="#ffffff" />

            <circle cx='850' cy='50' r='40' fill="#ffffff"/>
            <text x="823" y="120" fill="white">B.Tech</text>
            <text class="present" x="819" y="58" fill="black">Present</text>
        </svg>

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