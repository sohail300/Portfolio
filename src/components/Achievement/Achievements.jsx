import react, { useState } from "react";
import "./Achievements.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Achievements() {
  const [experience, setExperience] = useState(true);
  // const [opensource, setOpensource] = useState(false);
  const [community, setCommunity] = useState(false);

  function handleExperience(e) {
    setExperience(true);
    // setOpensource(false);
    setCommunity(false);
  }

  function handleOpensource(e) {
    // setOpensource(true);
    setExperience(false);
    setCommunity(false);
  }

  function handleCommunity(e) {
    setCommunity(true);
    setExperience(false);
    // setOpensource(false);
  }

  return (
    <div id="achievement-container">
      <h2>Achievements</h2>
      <div id="achievment-btn-container">
        <button className="achievment-btn" onClick={handleExperience}>Experience</button>
        {/* <button className="achievment-btn" onClick={handleOpensource}>Open Source</button> */}
        <button className="achievment-btn" onClick={handleCommunity}>Community Work</button>
      </div>

      <div id="achievment-desc">
        {experience && (
          <div id="experience" className="achievement">
            {/* <p>
              <FontAwesomeIcon icon={faStar} style={{ color: "#ffc800" }} />
              Lead a group of 4 students in a hackathon.
            </p> */}
            <p>
              <FontAwesomeIcon icon={faStar} style={{ color: "#ffc800" }} />
              Worked as a freelancer for a women apperal startup (will be launching in August-September).
            </p>
            <p>
              <FontAwesomeIcon icon={faStar} style={{ color: "#ffc800" }} />
              Contributed in the college fest website. <a className="links" href="https://hackathoniiitbh.github.io/enyugma2022/">Link</a>
            </p>
            <p>
              <FontAwesomeIcon icon={faStar} style={{ color: "#ffc800" }} />{" "}
              Designed UI/UX for these websites. <a className="links" href="https://github.com/sohail60/UI-Designs">Link</a>
            </p>
            <p>
              <FontAwesomeIcon icon={faStar} style={{ color: "#ffc800" }} />
              Won a Open Source contest 'HackSquad' organised by Novu.
            </p>
          </div>
        )}

        {/* {opensource && (
          <div id="open-source" className="achievement">
            <p>
              <FontAwesomeIcon icon={faStar} style={{ color: "#ffc800" }} /> Won
              a Open Source contest HackSquad organised by Novu.
            </p>
            
          </div>
        )} */}

        {community && (
          <div id="community-work" className="achievement">
            <p>
              <FontAwesomeIcon icon={faStar} style={{ color: "#ffc800" }} />{" "}
              Organised workshops regarding Cyber Security in college.
            </p>
            <p>
              <FontAwesomeIcon icon={faStar} style={{ color: "#ffc800" }} />{" "}
              Wrote technical blogs on Hashnode.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Achievements;
