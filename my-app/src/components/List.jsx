import React, { useState } from "react";
import "../css/List.css";
export default function List(props) {
  const [isEdit, setEdit] = useState(false);
  const [input, setInput] = useState("");
  const showview = (
    <div className="list" id={props.id}>
      <div className="title">{props.title}</div>
      <div className="action">
        <button
          onClick={(e) => {
            setEdit(true);
          }}
        >
          Add a Card
        </button>
      </div>
    </div>
  );

  const editview = (
    <div className="list">
      <div className="title">123</div>
      <input type="text" />
      <button>Add Card</button>
      <button>X</button>
    </div>
  );

  return <div className="list-wrapper">{isEdit ? editview : showview}</div>;
}
