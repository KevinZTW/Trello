import React, { useState } from "react";
import "../css/List.css";
import { useDispatch } from "react-redux";
import { ADDLIST } from "../redux/actions";
export default function List() {
  const [isEdit, setEdit] = useState(false);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (input !== "") {
      dispatch(ADDLIST(input));
    }
  }

  const showview = (
    <div className="list">
      <div className="action">
        <button
          onClick={(e) => {
            setEdit(true);
          }}
        >
          + Add a List
        </button>
      </div>
    </div>
  );

  const editview = (
    <div className="list">
      <form onSubmit={handleSubmit}>
        <input type="text" name="text" value={input} onChange={handleChange} />
        <button>Add List</button>
        <button
          onClick={(e) => {
            setEdit(false);
          }}
        >
          X
        </button>
      </form>
    </div>
  );

  return <div className="list-wrapper">{isEdit ? editview : showview}</div>;
}
