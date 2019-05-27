import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <ul>
          <li className="comment">{props.comment}</li>
          <li className="score"><span className="grey">Top Score:</span> {props.topScore} <span className="grey">|| Current Score: </span>{props.currentScore}</li>
        </ul>
      </div>
        {/* <p className="comment" id="comment">{props.comment}</p>
        <p className="topScore" id="top">Top Score: {props.topScore} | Current Score: {props.currentScore}</p> */}
    </nav>
  );
}

export default Navbar;