import react, { useState } from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Project.css";
import Card from "../subcomponents/Card/Card";

function Project() {
  const [mega, setMega] = useState(true);
  const [pet, setPet] = useState(false);

  function handleMega(e) {
    setMega(true);
    setPet(false);
  }

  function handlePet(e) {
    setPet(true);
    setMega(false);
  }

  return (
    <div id="project-container">
      <h2>Project</h2>
      <div id="project-btn-container">
        <button className="project-btn" onClick={handleMega}>
          Mega Projects
        </button>
        <button className="project-btn" onClick={handlePet}>
          Pet Projects
        </button>
      </div>

      <div id="mega-project" className="project">
        {mega && (
          <>
              <Card
                id="color-game-card"
                className="mega-project-card"
                link="https://sohail60.github.io/color-guesser-game/"
                imageLink="https://drive.google.com/file/d/1FK5owhn66Yyqx4hVHlp-HSyvIb9nNzLY/view?usp=share_link"
                alt="color-game-project.png"
              />

              {/* CHANGES HERE IF MADE NEW PROJECT TO LIST IN THE PORTFOLIO */}
              <Card
                id="color-game-card"
                className="mega-project-card"
                link="https://sohail60.github.io/color-guesser-game/"
                imageLink="../../images/color-game-project.png"
                alt="color-game-project.png"
              />
          </>
        )}
      </div>

      <div id="pet-project" className="project">
        {pet && (
          <>
              <Card
                id="color-game-card"
                className="pet-project-card"
                link="https://sohail60.github.io/color-guesser-game/"
                imageLink="../../images/color-game-project.png"
                alt="color-game-project.png"
              />
              <Card
                id="dice-game-card"
                className="pet-project-card"
                link="https://sohail60.github.io/dice-game/"
                imageLink="../../images/dice-game-project.png"
                alt="dice-game-project.png"
              />
              <Card
                id="ping-pong-card"
                className="pet-project-card"
                link="https://sohail60.github.io/ping-pong-score-keeper/"
                imageLink="../../images/ping-pong-project.png"
                alt="color-game-project.png"
              />
              <Card
                id="todo-list-card"
                className="pet-project-card"
                link="https://sohail60.github.io/To-Do-List/"
                imageLink="../../images/todo-list-project.png"
                alt="color-game-project.png"
              />

            {/* <Carousel breakPoints={breakPoints}>
                <Item><Card id='color-game-card' className='pet-project-card' link="https://sohail60.github.io/color-guesser-game/" imageLink='../../images/color-game-project.png' alt='color-game-project.png'/></Item>
                <Item><Card id='dice-game-card' className='pet-project-card' link="https://sohail60.github.io/dice-game/" imageLink='../../images/dice-game-project.png' alt='dice-game-project.png'/></Item>
                <Item><Card id='ping-pong-card' className='pet-project-card' link="https://sohail60.github.io/ping-pong-score-keeper/" imageLink='../../images/ping-pong-project.png' alt='color-game-project.png'/></Item>
                <Item><Card id='todo-list-card' className='pet-project-card' link="https://sohail60.github.io/To-Do-List/" imageLink='../../images/todo-list-project.png' alt='color-game-project.png'/></Item>
                </Carousel> */}
          </>
        )}
      </div>
    </div>
  );
}

export default Project;
