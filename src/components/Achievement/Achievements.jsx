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
            <p>
              <FontAwesomeIcon icon={faStar} style={{ color: "#ffc800" }} />{" "}
              Worked as a freelancer for a women apperal startup STREEYA (will be launching in October-November).
            </p>
            <p>
              <FontAwesomeIcon icon={faStar} style={{ color: "#ffc800" }} />{" "}
              Received Project offer from Bhagalpur Police: Member of a team of 12+
              students, collaborated with 6 officers to simplify the FIR progress tracking,
              multilevel reporting and analytics. For more, refer <a style={{color:'#fff'}} className="links" href="https://timesofindia.indiatimes.com/city/patna/iiit-bhagalpur-and-police-ink-mou-to-develop-ai-based-app/articleshow/102066581.cms">TimesofIndia</a>.
            </p>
            {/* , <a className="links" href="https://github.com/sohail60/UI-Designs">Dainik Bhaskar</a>, <a className="links" href="https://github.com/sohail60/UI-Designs">The Bihar Bulletin</a>. */}
            <p>
              <FontAwesomeIcon icon={faStar} style={{ color: "#ffc800" }} />{" "}
              Contributed in the college fest website. <a className="links" href="https://hackathoniiitbh.github.io/enyugma2022/">Link</a>
            </p>
            <p>
              <FontAwesomeIcon icon={faStar} style={{ color: "#ffc800" }} />{" "}
              Demonstrated proficiency in coding by solving over 100+ questions on <a style={{color:'#fff'}} className="links" href="https://leetcode.com/sohail60/">LeetCode</a>,
              100+ on <a style={{color:'#fff'}} className="links" href="https://auth.geeksforgeeks.org/user/sohailatwork10/">GFG</a> and rest on others. 
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
              Incharge of Cyber Security club consisting of 40+ members in college.
            </p>
            <p>
              <FontAwesomeIcon icon={faStar} style={{ color: "#ffc800" }} />{" "}
              As the incharge of cyber security club, organised 5+ successful events.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Achievements;
