import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import cv from "../Marko_Perica_CV(English).pdf";

function Download() {
  return (
    <React.Fragment>
      <div className="btn-con">
        <a
          href={cv}
          className="main-btn"
          download="Marko_Perica_CV(English).pdf"
        >
          <span className="btn-text">Download CV</span>
          <FontAwesomeIcon icon={faDownload} className="btn-icon" />
        </a>
      </div>
    </React.Fragment>
  );
}

export default Download;
