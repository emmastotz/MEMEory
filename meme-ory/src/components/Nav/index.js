import React from "react";
import "./style.css";
import logo from "./logo-01.png";

const Nav = props => {
  return (
  <nav className="navbar navbar-expand-lg">
    <ul className="navbar justify-content-end">
      <li className="nav-item">
        <a 
          href="_blank" 
          className="navbar-brand">
          <img width="250" height="auto" 
            src={logo}
            alt="logo"
          />
        </a>
      </li>
      <li></li>
      <li></li>
      <li></li>
      <li className="nav-item" id="cur-score">
        <span class="navbar-text">
          Current Score: {props.score}
        </span>
      </li>
      <li className="nav-item" id="top-score">
        <span class="navbar-text">
          Top Score: {props.topScore}
        </span>
      </li>
    </ul>
  </nav>
)};

export default Nav;