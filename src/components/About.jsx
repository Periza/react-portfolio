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
            <p className="tl-duration">2010 - present</p>
            <h5>
              Web Developer<span> - Vircrosoft</span>
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              quasi vero fugit.
            </p>
          </div>
          <div className="timeline-item">
            <div className="tl-icon">
              <i className="fas fa-briefcase"></i>
            </div>
            <p className="tl-duration">2008 - 2011</p>
            <h5>
              Software Engineer<span> - Boogle, Inc.</span>
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              quasi vero fugit.
            </p>
          </div>
          <div className="timeline-item">
            <div className="tl-icon">
              <i className="fas fa-briefcase"></i>
            </div>
            <p className="tl-duration">2016 - 2017</p>
            <h5>
              C++ Programmer<span> - Slime Tech</span>
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              quasi vero fugit.
            </p>
          </div>
          <div className="timeline-item">
            <div className="tl-icon">
              <i className="fas fa-briefcase"></i>
            </div>
            <p className="tl-duration">2009 - 2013</p>
            <h5>
              Business Degree<span> - Sussex University</span>
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              quasi vero fugit.
            </p>
          </div>
          <div className="timeline-item">
            <div className="tl-icon">
              <i className="fas fa-briefcase"></i>
            </div>
            <p className="tl-duration">2013 - 2016</p>
            <h5>
              Computer Science Degree<span> - Brookes University</span>
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              quasi vero fugit.
            </p>
          </div>
          <div className="timeline-item">
            <div className="tl-icon">
              <i className="fas fa-briefcase"></i>
            </div>
            <p className="tl-duration">2017 - present</p>
            <h5>
              3d Animation<span> - Brighton University</span>
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              quasi vero fugit.
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default About;
