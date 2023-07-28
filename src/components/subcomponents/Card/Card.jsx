import React from "react";
import colorgame from '../../images/color-game-project.png'
import dicegame from '../../images/dice-game-project.png'
import pingpong from '../../images/ping-pong-project.png'
import todolist from '../../images/todo-list-project.png'
import project from '../../images/project.png'

function Card(props){
    return(
        <div id={props.id} className={props.className}>
            <a href={props.link} target="_blank">
            {/* <img src={require('{props.imageLink}')} alt="Hero png"/> */}
            {/* <img src={props.imageLink} alt={props.alt}/> */}
            <img src={project} alt={props.alt}/>
            {/* <img src={require('../../images/hero.png')} alt="Hero png"/> */}
            {/* ../images/color-game-project.png */}
            </a>
            <p>{props.name}</p>
        </div>
    );
}

export default Card;