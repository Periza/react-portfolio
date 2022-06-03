import React from "react";
import { Link } from "react-router-dom";

import Blog from "./Blog";

function Blogs() {
  return (
    <React.Fragment>
      <div className="blogs">
        <Blog></Blog>
        <Blog></Blog>
        <Blog></Blog>
        <Blog></Blog>   
      </div>
    </React.Fragment>
  );
}

export default Blogs;
