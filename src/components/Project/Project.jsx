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
          Projects
        </button>
      </div>

      <div id="mega-project" className="project">
        {mega && (
          <>
            <Card
              id="e-kaksha-card"
              className="mega-project-card" name="E-Kaksha"
              link="https://e-kaksha-sohail300.vercel.app/"
              imageLink="../../images/ping-pong-project.png"
              alt="e-kaksha-project.png"
            />

            <Card
              id="expense-tracker-card"
              className="mega-project-card" name="Expense-Tracker"
              link="https://expense-tracker-sohail300.vercel.app/"
              imageLink="../../images/ping-pong-project.png"
              alt="e-kaksha-project.png"
            />
          </>
        )}
      </div>

      {/* Pet Project starts */}
      <div id="pet-project" className="project">
        {pet && (
          <>
            <Card
              id="exchange-rate-card"
              className="pet-project-card" name="Exchange Rate Calculator" link="https://sohail60.github.io/04-Exchange-Rate-Calculator/"
              imageLink="../../images/todo-list-project.png"
              alt="exchange-rate-project.png"
            />

            <Card
              id="movie-booking-card"
              className="pet-project-card" name="Movie Seat Booking" link="https://sohail60.github.io/02-Movie-Seat-Booking/"
              imageLink="../../images/todo-list-project.png"
              alt="exchange-rate-project.png"
            />

            <Card
              id="hangman-game-card"
              className="pet-project-card" name="Hangman Game"
              link="https://sohail60.github.io/06-Hangman-Game/"
              imageLink="../../images/todo-list-project.png"
              alt="hangman-game-project.png"
            />

            <Card
              id="ping-pong-card"
              className="pet-project-card" name="Ping Pong Score Keeper"
              link="https://sohail60.github.io/ping-pong-score-keeper/"
              imageLink="../../images/ping-pong-project.png"
              alt="ping-pong-project.png"
            />


            <Card
              id="todo-list-card"
              className="pet-project-card" name="To-do List" link="https://sohail60.github.io/02-Movie-Seat-Booking/"
              imageLink="../../images/todo-list-project.png"
              alt="to-do-list-project.png"
            />

            <Card
              id="color-game-card"
              className="mega-project-card" name="Color Guesser Game"
              link="https://sohail60.github.io/color-guesser-game/"
              imageLink="https://drive.google.com/file/d/1FK5owhn66Yyqx4hVHlp-HSyvIb9nNzLY/view?usp=share_link"
              alt="color-game-project.png"
            />

            <Card
              id="dice-game-card" name="Dice Roller Game"
              className="pet-project-card"
              link="https://sohail60.github.io/dice-game/"
              imageLink="../../images/dice-game-project.png"
              alt="dice-game-project.png"
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Project;
