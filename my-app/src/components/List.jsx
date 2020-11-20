import React, { useState } from "react";
import "../css/List.css";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { ADDCARD } from "../redux/actions";
export default function List(props) {
  const [isEdit, setEdit] = useState(false);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  function addCard() {
    if (input !== "") {
      dispatch(ADDCARD(props.id, input));
    }

    setInput("");
  }
  function handleChange(e) {
    setInput(e.target.value);
  }
  const card = useSelector((state) => {
    return state.cardReducer.map((list) => {
      if (list.listId === props.id) {
        return <Card title={list.title} key={list.id} />;
      }
    });
  });

  const showview = (
    <div className="list" id={props.id}>
      <div className="title">{props.title}</div>
      <div className="cardWrapper">{card}</div>
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
      <div className="title">{props.title}</div>
      <div className="cardWrapper">{card}</div>
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={addCard}>Add Card</button>
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
