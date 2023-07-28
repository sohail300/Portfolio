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
          <a href="https://drive.google.com/file/d/16721u1kpMJKsE5TD7tIRLWMJe8-5ivIj/view?usp=sharing">
            Download CV
          </a>
        </button>
      </div>
      <img src={require("../images/hero.png")} alt="Hero png" />
    </main>
  );
}

export default Hero;
