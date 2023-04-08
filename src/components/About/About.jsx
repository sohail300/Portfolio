import react from 'react';
import './About.css'

function About(){
    return(
        <div id='about-me-container'>
            <img src={require('../images/about.jpeg')} alt="About png"/>
            <div id="about-me">
            <h2>About Me</h2>
                <button id='education-btn'>Education</button>
                <p id="education">Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an  unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum.</p>
            </div>
        </div>

    );
}

export default About;