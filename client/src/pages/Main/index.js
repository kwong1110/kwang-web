import React from "react";
import { About, Project, Contact } from "..";

import ReactTooltip from "react-tooltip";

function Main() {
  return (
    <>
      <About main />
      <Project main />
      <Contact main />
      <ReactTooltip />
    </>
  );
}

export default Main;
