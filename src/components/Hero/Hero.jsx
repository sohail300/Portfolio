import react from 'react';
import './Hero.css'

function Hero(){
    return (
        <main>
        <div id='intro-container'>
        <div id='intro'>Hi! I am <span id='name'>Md Sohail Ansari</span></div>
        <button id='download-cv'>Download CV</button>
        </div>
        <img src={require('../images/hero.png')} alt="Hero png"/>
        </main>
    );
}

export default Hero;