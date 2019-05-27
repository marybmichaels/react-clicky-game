import React from "react";
import "./style.css";

function Jumbotron(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-4">Symbol Clicky Game</h1>
      <p className="lead">Click on a icon to earn a point, but don't click on the same icon twice!</p>
    </div>
  </div>
  );
}

export default Jumbotron;
