import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhp,
  faHtml5,
  faJs,
  faCss3Alt,
  faLinux,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";

function About() {
  return (
    <React.Fragment>
      <section className="container about" id="about">
        <div className="main-title">
          <h1>
            ABOUT <span>ME</span>
            <br></br>
          </h1>
        </div>
        <div id="skills-title">
          <h2>Some of my skills</h2>
        </div>
        <div className="skills-container">
          <div className="skill-box" id="html5">
            <div className="skill-title">
              <FontAwesomeIcon icon={faHtml5} size="4x"></FontAwesomeIcon>
              <h3>HTML 5</h3>
            </div>
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <div className="skill-box" id="css">
            <div className="skill-title">
              <FontAwesomeIcon icon={faCss3Alt} size="4x"></FontAwesomeIcon>
              <h3>CSS 3</h3>
            </div>
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <div className="skill-box" id="javascript">
            <div className="skill-title">
              <FontAwesomeIcon icon={faJs} size="4x"></FontAwesomeIcon>
              <h3>JavaScript</h3>
            </div>
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <div className="skill-box" id="php">
            <div className="skill-title">
              <FontAwesomeIcon
                id="php"
                icon={faPhp}
                size="4x"
              ></FontAwesomeIcon>
              <h3>PHP</h3>
            </div>
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <div className="skill-box" id="linux">
            <div className="skill-title">
              <FontAwesomeIcon
                id="linux"
                icon={faLinux}
                size="4x"
              ></FontAwesomeIcon>
              <h3>Linux</h3>
            </div>
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <div className="skill-box">
            <div className="skill-title" id="git">
              <FontAwesomeIcon icon={faGitAlt} size="4x"></FontAwesomeIcon>
              <h3>Git</h3>
            </div>
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </div>
        <h4 className="stat-title">My Timeline</h4>
        <div className="timeline">
          <div className="timeline-item">
            <div className="tl-icon">
              <i className="fas fa-briefcase"></i>
            </div>
            <p className="tl-duration">2014 - 2020</p>
            <h5>
              bacc. ing. comp.<span> - FERIT</span>
            </h5>
          </div>
          <div className="timeline-item">
            <div className="tl-icon">
              <i className="fas fa-briefcase"></i>
            </div>
            <p className="tl-duration">2015 - 2020</p>
            <h5>
              Pollster<span> - IPSOS</span>
            </h5>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default About;
