import React from "react";
import { About, Project, MyNote, Contact } from "..";

import ReactTooltip from "react-tooltip";

function Main() {
  return (
    <>
      <About main />
      <Project main />
      <MyNote main />
      <Contact main />
      <ReactTooltip />
    </>
  );
}

export default Main;
