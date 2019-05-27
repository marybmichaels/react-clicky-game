import React from "react";
import "./style.css";

function IconCard(props) {
  return (
    <div className="card" onClick={props.onClick}>
      <img id={props.id} src={props.image} className="card-img-top" alt={props.id} >
      </img>
      </div>
      );
    }
    
    export default IconCard;
