import react from "react";
import "./Hero.css";

function Hero() {
  return (
    <main>
      <div id="intro-container">
        <div id="intro">
          Hi! I am <span id="name">Md Sohail Ansari</span>
        </div>
        <button id="download-cv">
          <a href="https://drive.google.com/file/d/1_gxf_BvLyjOU4n6Wzj6zwy4y-o1z0ZP5/view?usp=sharing" target="_blank" rel="noreferrer">
            Download CV
          </a>
        </button>
      </div>
      <img src={require("../images/hero.png")} alt="Hero png" />
    </main>
  );
}

export default Hero;
