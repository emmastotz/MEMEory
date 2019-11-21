import React from "react";
import "./style.css";
import logo from "./logo.svg"

const Nav = props => (
  <nav className="navbar">
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <a 
          href="_blank" 
          className="navbar-brand">
          <img 
            src={logo}
            alt="logo"
          ></img>
        </a>
      </li>
      <li className="nav-item" id="cur-score">
        Current Score: {props.score}
      </li>
      <li className="nav-item" id="top-score">
        Top Score: {props.topScore}
      </li>
    </ul>
  </nav>
);

export default Nav;