import React from "react";

function Blog() {
  return (
    <React.Fragment>
      <div className="blog">
        <img src={require("../img/cat_programmer.jpg")} alt="" />
        <div className="blog-text">
          <h4>How to Create Your Own Website</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem maxime quae quisquam quibusdam distinctio laborum
            officiis ratione quia aperiam quasi!
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Blog;
