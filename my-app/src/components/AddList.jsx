import React, { useState } from "react";
import "../css/List.css";
export default function List() {
  const [isEdit, setEdit] = useState(false);
  const showview = (
    <div className="list">
      <div className="action">
        <button
          onClick={(e) => {
            setEdit(true);
          }}
        >
          Add List
        </button>
      </div>
    </div>
  );

  const editview = (
    <div className="list">
      <input type="text" />
      <button>Add List</button>
      <button
        onClick={(e) => {
          setEdit(false);
        }}
      >
        X
      </button>
    </div>
  );

  return <div className="list-wrapper">{isEdit ? editview : showview}</div>;
}
