import React from "react";

// component imports
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Controls from "./components/Controls";
import Blogs from "./components/Blogs";
import Test from "./components/Test";
import { Link, NavLink } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";


import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import "./styles/styles.scss";
function App() {
  return (
    <React.Fragment>
      <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Header />} />
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>} ></Route>
        </Routes>
      <Controls></Controls>
      </Router>
      </div>
      
    </React.Fragment>
  );
}

export default App;
