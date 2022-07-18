import React, { useState, useReducer } from "react";
import Spinner from "./Spinner";

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

// add a spinner

const url = "http://portfolio.markoperica.com/sendMail.php";

function reducer(state, action) {
  switch (action.type) {
    case "name":
      return { warning: "name" };
    case "email":
      return { warning: "email" };
    case "message":
      return { warning: "message" };
    default:
      return { warning: "" };
  }
}

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [spinner, setSpinner] = useState(false);

  const [warning, dispatch] = useReducer(reducer, { warning: "" });

  const [spinnerColor, setSpinnerColor] = useState("#0000ff");

  function checkEmail() {
    var regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  }

  // check all fields
  function checkFields() {
    if (!name) {
      dispatch({ type: "name" });
      return;
    }
    if (!checkEmail()) {
      dispatch({ type: "email" });
      return;
    }
    if (!message) {
      dispatch({ type: "message" });
      return;
    }
    dispatch({ type: "" });
    return true;
  }

  function sendMail(e) {
    e.preventDefault();

    // if all fields are OK send mail
    if (checkFields()) {
      const xhr = new XMLHttpRequest();
      setSpinner(true);

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 2 || xhr.readyState === 3) {
          console.log("Loading...");
        } else if (xhr.readyState === 4) {
          if(xhr.status !== 200) {
          switch (xhr.response) {
            case "1":
              setSpinner(false);
              dispatch({ type: "name" });
              console.log("Name error!");
              break;
            case "2":
              setSpinner(false);
              dispatch({ type: "email" });
              console.log("E-mail error!");
              break;
            case "3":
              setSpinner(false);
              dispatch({ type: "message" });
              console.log("Message error!");
              break;
            default:
              setColor("#00ff00");
              console.log(xhr.response);
          }
        }
        }
      };

      xhr.open("POST", url, true);
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhr.send(`name=${name}&message=${message}&email=${email}`);
    }
  }

  function setColor(color) {
    setSpinnerColor(color);
    setTimeout(() => {
      setSpinner(false);
      setSpinnerColor("#0000ff");
    }, 1000);
  }

  return (
    <React.Fragment>
      <section className="container contact" id="contact">
        <div className="contact-container">
          {/* <div className="main-title">
            <h2>
              Contact <span>Me</span>
              <span className="bg-text">Contact</span>
            </h2>
          </div> */}
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
                  {warning.warning === "name" && (
                    <span style={{ color: "#000000", marginLeft: "10px" }}>
                      Please enter a name!
                    </span>
                  )}
                  {warning.warning === "email" && (
                    <span style={{ color: "#000000", marginLeft: "10px" }}>
                      Entered e-mail is not valid!
                    </span>
                  )}
                  {warning.warning === "message" && (
                    <span style={{ color: "#000000", marginLeft: "10px" }}>
                      Please enter a message!
                    </span>
                  )}
                  <Spinner
                    loading={spinner}
                    setSpinner={setSpinner}
                    color={spinnerColor}
                  ></Spinner>
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
