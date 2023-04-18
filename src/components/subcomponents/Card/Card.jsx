import React from "react";

function Card(props){
    return(
        <div id={props.id} className={props.className}>
            <a href={props.link}>
            {/* <img src={require('{props.imageLink}')} alt="png"/> */}
            <img src={require('../../images/hero.png')} alt="Hero png"/>
            {/* ../images/color-game-project.png */}
            </a>
        </div>
    );
}

export default Card;