import React from "react";
import "./style.css";

const Nav = props => (
  <nav className="navbar">
    <ul>
      <li className="brand animated lightSpeedIn">
        <a 
          href="/meme-ory/" 
          className="navbar-brand">{props.title}
          <img 
            src={require('./logo.svg')}
            alt="logo"
          ></img>
        </a>
      </li>
      <li 
        id="cur-score">Current Score: {props.score}
      </li>
      <li 
        id="top-score">Top Score: {props.topScore}
      </li>
    </ul>
  </nav>
);

export default Nav;