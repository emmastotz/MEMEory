  
import React from "react";
import "./style.css";

const Nav = props => (
  <nav>
    <ul>
      <li className="brand animated lightSpeedIn">
        <a href="/meme-ory/">{props.title}</a>
      </li>
      <li 
        id="rw">{props.shout}
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