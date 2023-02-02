import React from "react";
import { RiMenu3Line, RiCloseLin } from "react-icons/ri";
import "./navbar.css";

// BEM -> Block Element Modifier Naming Convention

function Navbar() {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar__links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
