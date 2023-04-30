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
          <a href="https://drive.google.com/u/3/uc?id=1Tp0agDse6hMskKRMxKya5SDGWoYPCKzA&export=download">
            Download CV
          </a>
        </button>
      </div>
      <img src={require("../images/hero.png")} alt="Hero png" />
    </main>
  );
}

export default Hero;
