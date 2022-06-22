import React, { useState } from "react";
import { AjaxClient } from "ajax-client";

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
import { useEffect } from "react";

const url = "http://portfolio.markoperica.com/sendMail.php";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  let [emailWarning, setEmailWarning] = useState(false);
  let [nameWarning, setNameWarning] = useState(false);
  let [messageWarning, setMessageWarning] = useState(false);

  function checkEmail() {
    var regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  }

  // check all fields
  function checkFields() {
    if (!name) {
      setNameWarning(true);
      return;
    }
    setNameWarning(false);
    if (!checkEmail()) {
      setEmailWarning(true);
      return;
    }
    setEmailWarning(false);
    if (!message) {
      setMessageWarning(true);
      return;
    }
    setMessageWarning(false);
    return true;
  }

  function sendMail(e) {
    e.preventDefault();
    const client = new AjaxClient();
    const data = { name: name, email: email, message: message };
    // if all fields are OK send mail
    if (checkFields()) {
      const xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
        }
      };

      xhr.open("POST", url, true);
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhr.send(`name=${name}&message=${message}&email=${email}`);
    }
  }

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
                    <span>
                      <a href="mailto:marko.perica@markoperica.com.hr">
                        : marko.perica@markoperica.com.hr
                      </a>
                    </span>
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
                    <span>
                      <a href="tel:+385977580825">: +385977580825 </a>
                    </span>
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
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                  </a>
                  <a
                    href="https://github.com/Periza"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/marko-perica-054700a8/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                  </a>
                </div>
              </div>
            </div>
            <div className="right-contact">
              <form action="">
                <div className="input-control i-c-2">
                  <input
                    type="text"
                    required
                    placeholder="YOUR NAME"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  <input
                    type="email"
                    required
                    placeholder="YOUR EMAIL"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="input-control">
                  <textarea
                    name=""
                    id=""
                    cols="15"
                    rows="8"
                    placeholder="Message here..."
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  ></textarea>
                </div>
                <div className="submit-btn" onClick={(e) => sendMail(e)}>
                  <a href="" className="main-btn">
                    <span className="btn-text">Submit</span>
                  </a>
                  {nameWarning && (
                    <span style={{ color: "#000000", marginLeft: "10px" }}>
                      Please enter a name!
                    </span>
                  )}
                  {emailWarning && (
                    <span style={{ color: "#000000", marginLeft: "10px" }}>
                      Entered e-mail is not valid!
                    </span>
                  )}
                  {messageWarning && (
                    <span style={{ color: "#000000", marginLeft: "10px" }}>
                      Please enter a message!
                    </span>
                  )}
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
