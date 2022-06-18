import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarker,
  faUserGraduate,
  faMobile,
  faGlobeEurope,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <React.Fragment>
      <section className="container contact" id="contact">
        <div className="contact-container">
          <div className="main-title">
            <h2>
              Contact <span>Me</span>
              <span className="bg-text">Contact</span>
            </h2>
          </div>
          <div className="contact-content-con">
            <div className="left-contact">
              <h4>Contact me here</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                laborum numquam? Quam excepturi perspiciatis quas quasi.
              </p>
              <div className="contact-info">
                <div className="contact-item">
                  <div className="icon">
                    <FontAwesomeIcon icon={faMapMarker}></FontAwesomeIcon>
                    <span>Location</span>
                  </div>
                  <p>: London, united Kingdom</p>
                </div>
                <div className="contact-item">
                  <div className="icon">
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                    <span>Email</span>
                  </div>
                  <p>
                    <span>: marko.perica@markoperica.com.hr</span>
                  </p>
                </div>
                <div className="contact-item">
                  <div className="icon">
                    <FontAwesomeIcon icon={faUserGraduate}></FontAwesomeIcon>
                    <span>Education</span>
                  </div>
                  <p>
                    <span>: FERIT Osijek</span>
                  </p>
                </div>
                <div className="contact-item">
                  <div className="icon">
                    <FontAwesomeIcon icon={faMobile}></FontAwesomeIcon>
                    <span>Mobile Number</span>
                  </div>
                  <p>
                    <span>: +385977580825</span>
                  </p>
                </div>
                <div className="contact-item">
                  <div className="icon">
                    <FontAwesomeIcon icon={faGlobeEurope}></FontAwesomeIcon>
                    <span>Languages</span>
                  </div>
                  <p>
                    <span>: English, Croatian, Italian</span>
                  </p>
                </div>
              </div>
              <div className="contact-icons">
                <div className="contact-icon">
                  <a
                    href="https://www.facebook.com/marko.perica1"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                  </a>
                  <a href="https://github.com/Periza" target="_blank">
                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/marko-perica-054700a8/"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                  </a>
                </div>
              </div>
            </div>
            <div className="right-contact">
              <form action="">
                <div className="input-control i-c-2">
                  <input type="text" required placeholder="YOUR NAME" />
                  <input type="email" required placeholder="YOUR EMAIL" />
                </div>
                <div className="input-control">
                  <textarea
                    name=""
                    id=""
                    cols="15"
                    rows="8"
                    placeholder="Message here..."
                  ></textarea>
                </div>
                <div className="submit-btn">
                  <a href="" className="main-btn">
                    <span className="btn-text">Submit</span>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Contact;
