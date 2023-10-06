import React from "react";
import colorgame from '../../images/color-game-project.png'
import dicegame from '../../images/dice-game-project.png'
import pingpong from '../../images/ping-pong-project.png'
import todolist from '../../images/todo-list-project.png'
import project from '../../images/project.png'

function Card(props){
    return(
        <div id={props.id} className={props.className}>
            <a href={props.link} target="_blank" rel="noreferrer">
            {/* <img src={props.imageLink} alt={props.alt}/> */}
            <img src={project} alt={props.alt}/>
            </a>
            <p style={{textAlign:"center"}}>{props.name}</p>
        </div>
    );
}

export default Card;