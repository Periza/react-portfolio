import React from "react";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faEnvelopeOpen,
  faHome,
  faNewspaper,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function Controls() {
  return (
    <React.Fragment>
      <div className="controls">
        <Link to="/">
          <div className="control control-1 active-btn" data-id="home">
            <FontAwesomeIcon icon={faHome} className="icon"></FontAwesomeIcon>
          </div>
        </Link>
        <Link to="/about">
          <div className="control control-2" data-id="about">
            <FontAwesomeIcon icon={faUser} className="icon"></FontAwesomeIcon>
          </div>
        </Link>
        <Link to="portfolio">
          <div className="control control-3" data-id="portfolio">
            <FontAwesomeIcon
              icon={faBriefcase}
              className="icon"
            ></FontAwesomeIcon>
          </div>
        </Link>
        <Link to="blogs">
          <div className="control control-4" data-id="blogs">
            <FontAwesomeIcon
              icon={faNewspaper}
              className="icon"
            ></FontAwesomeIcon>
          </div>
        </Link>
        <Link to="contact">
          <div className="control control-5" data-id="contact">
            <FontAwesomeIcon
              icon={faEnvelopeOpen}
              className="icon"
            ></FontAwesomeIcon>
          </div>
        </Link>
      </div>
    </React.Fragment>
  );
}

export default Controls;
