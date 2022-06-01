import React from "react";
import Download from "./Download";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faMagnifyingGlassPlus,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <React.Fragment>
      <header className="section sec1 header active" id="home">
        <div className="header-content">
          <div className="left-header">
            <div className="h-shape"></div>
            <div className="image">
              <img src={require("../img/manul.jpg")} alt="manul" />
            </div>
          </div>
          <div className="right-header">
            <h1 className="name">
              Bok, moje ime je <span>Marko</span>
              Web Developer
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Veritatis minus doloremque facere magnam cumque quae animi,
              repellendus, a quod impedit architecto nostrum rerum. Nulla sequi
              suscipit qui iure consequuntur architecto!
            </p>
            <Download></Download>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Header;
