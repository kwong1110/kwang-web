import React from "react";
import logo from "../images/logo.svg";

function Header() {
  return (
    <header>
      <nav>
        <div>
          <img src={logo} alt="logo" href="/" />
        </div>
        <div>
          <a href="/">Project</a>
          <a href="/MyNote">MyNote</a>
          <a href="/">Contact</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
