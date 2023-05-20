import react, { useState } from "react";
import "./Skills.css";
import Java from "../icons/Java";
import Javascript from "../icons/Javascript";
import Python from "../icons/Python";
import HTML from "../icons/HTML";
import CSS from "../icons/CSS";
import React from "../icons/React";
import NodeJS from "../icons/NodeJS";
import Express from "../icons/Express";
import Git from "../icons/Git";
import Notion from "../icons/Notion";
import Github from "../icons/Github";
import Netlify from "../icons/Netlify";
import MongoDB from "../icons/MongoDB";
import MySQL from "../icons/MySQL";
import Firebase from "../icons/Firebase";
// import {FaFigma} from 'react-icons/fa';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faJava} from '@fortawesome/free-solid-svg-icons'
// import { faPython } from '@fortawesome/free-solid-svg-icons'
// ,faSquareJs,faHtml5,faCss3Alt,faPython

function Skills() {
  const [language, setLanguage] = useState(true);
  const [framework, setFramework] = useState(false);
  const [tools, setTools] = useState(false);
  const [platform, setPlatform] = useState(false);
  const [databases, setDatabases] = useState(false);

  function handleLanguage(e) {
    setLanguage(true);
    setFramework(false);
    setTools(false);
    setPlatform(false);
    setDatabases(false);
  }

  function handleFramework(e) {
    setLanguage(false);
    setFramework(true);
    setTools(false);
    setPlatform(false);
    setDatabases(false);
  }

  function handleTools(e) {
    setLanguage(false);
    setFramework(false);
    setTools(true);
    setPlatform(false);
    setDatabases(false);
  }

  function handlePlatform(e) {
    setLanguage(false);
    setFramework(false);
    setTools(false);
    setPlatform(true);
    setDatabases(false);
  }

  function handleDatabases(e) {
    setLanguage(false);
    setFramework(false);
    setTools(false);
    setPlatform(false);
    setDatabases(false);
    setDatabases(true);
  }

  return (
    <div id="skills-container">
      <h2>Skills</h2>
      <div id="skills-btn-container">
        <button className="skills-btn" onClick={handleLanguage}>
          Language
        </button>
        <button className="skills-btn" onClick={handleFramework}>
          Framework
        </button>
        <button className="skills-btn" onClick={handleTools}>
          Tools
        </button>
        <button className="skills-btn" onClick={handlePlatform}>
          Platform
        </button>
        <button className="skills-btn" onClick={handleDatabases}>
          Databases
        </button>
      </div>

      {language && (
        <div id="language-icon" class="icon">
          <Java />
          <Javascript />
          <Python />
          <HTML />
          <CSS />
        </div>
      )}

      {framework && (
        <div className="framework-icon" class="icon">
          <React />
          <NodeJS />
          <Express />
        </div>
      )}

      {tools && (
        <div className="tools-icon" class="icon">
        {/* <FaFigma /> */}
          <Git />
          <Notion />
        </div>
      )}

      {platform && (
        <div className="platform-icon" class="icon">
          {/* <Heroku /> */}
          <Netlify />
          <Github />
        </div>
      )}

      {databases && (
        <div className="databases-icon" class="icon">
          <MongoDB />
          <MySQL />
          <Firebase />
        </div>
      )}
    </div>
  );
}

export default Skills;
