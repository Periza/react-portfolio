import React from "react";

import Section from "./Section";

function Main() {
  return (
    <React.Fragment>
      {/* <section className="section sec2 about"></section>
      <section className="section sec3 portfolio"></section>
      <section className="section sec4 blogs"></section>
      <section className="section sec5 contact"></section> */}

      <Section className="sec2 about"></Section>
      <Section className="sec3 portfolio"></Section>
      <Section className="sec4 blogs"></Section>
      <Section className="sec5 contact"></Section>
    </React.Fragment>
  );
}

export default Main;
