import React from "react";
import colorgame from '../../images/color-game-project.png'
import dicegame from '../../images/dice-game-project.png'
import pingpong from '../../images/ping-pong-project.png'
import todolist from '../../images/todo-list-project.png'

function Card(props){
    return(
        <div id={props.id} className={props.className}>
            <a href={props.link}>
            {/* <img src={require('{props.imageLink}')} alt="Hero png"/> */}
            <img src={props.imageLink} alt={props.alt}/>
            {/* <img src={dicegame} alt={props.alt}/> */}
            {/* <img src={require('../../images/hero.png')} alt="Hero png"/> */}
            {/* ../images/color-game-project.png */}
            </a>
        </div>
    );
}

export default Card;