import React from "react";

// component imports
import Header from "./components/Header";
import Main from "./components/Main";
import Controls from "./components/Controls";
import Blogs from "./components/Blogs";
import Test from "./components/Test";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import "./styles/styles.scss";
function App() {
  return (
    <React.Fragment>
      <div className="App"></div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Header />} />
          <Route path="/blogs" element={<Blogs />}></Route>
        </Routes>
      </Router>
      <Controls></Controls>
    </React.Fragment>
  );
}

export default App;
