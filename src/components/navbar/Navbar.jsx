import React from "react";
import { RiMenu3Line, RiCloseLin } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css";

// BEM -> Block Element Modifier Naming Convention

function Navbar() {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <p>
            <a href="#home"></a>Home
          </p>
          <p>
            <a href="#wgpt3"></a>What is GPT3?
          </p>
          <p>
            <a href="#possiblity"></a>OpenAI
          </p>
          <p>
            <a href="#features"></a>CaseStudies
          </p>
          <p>
            <a href="#blog"></a>Library
          </p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
    </div>
  );
}

export default Navbar;
