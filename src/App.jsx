import React from "react";

// component imports
import Header from "./components/Header";
import Main from "./components/Main";
import Controls from "./components/Controls";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import "./styles/styles.scss";
function App() {
  return (
    <React.Fragment>
      <Router>
        <div className="App">
          <Header />
          <Controls></Controls>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
