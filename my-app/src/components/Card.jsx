import React, { useState } from "react";
import "../css/Card.css";
import { Draggable } from "react-beautiful-dnd";
export default function List(props) {
  return (
    <Draggable draggableId={props.id} index={props.index}>
      {(provided) => (
        <div
          className="card"
          id={props.id}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {props.title}
        </div>
      )}
    </Draggable>
  );
}
