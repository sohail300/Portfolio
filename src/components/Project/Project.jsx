import react from 'react';
import './Project.css'

function Project(){
    return(
        <div id="project-container">
            <h2>Project</h2>
            <div id="project-btn-container">
            <button className='project-btn'>Mega Projects</button>
            <button className='project-btn'>Pet Projects</button>
            </div>
            <div id="mega-project" className='project'>
            <a href="https://sohail60.github.io/color-guesser-game/">
            <img src={require('../images/color-game-project.png')} alt="png"/>
            </a>
            <a href="https://sohail60.github.io/color-guesser-game/">
            <img src={require('../images/color-game-project.png')} alt="png"/>
            </a>
            </div>

            <div id="pet-project" className='project'>
            <a href="https://sohail60.github.io/color-guesser-game/">
            <img src={require('../images/color-game-project.png')} alt="png"/>
            </a>
            <a href="https://sohail60.github.io/dice-game/">
            <img src={require('../images/dice-game-project.png')} alt="png"/>
            </a>
            <a href="https://sohail60.github.io/ping-pong-score-keeper/">
            <img src={require('../images/ping-pong-project.png')} alt="png"/>
            </a>
            <a href="https://sohail60.github.io/To-Do-List/">
            <img src={require('../images/todo-list-project.png')} alt="png"/>
            </a>
            </div>
        </div>
    );
}

export default Project;