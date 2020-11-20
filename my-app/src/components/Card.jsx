import React, { useState } from "react";
import "../css/Card.css";
export default function List(props) {
  return (
    <div className="card" id={props.id}>
      {props.title}
    </div>
  );
}
