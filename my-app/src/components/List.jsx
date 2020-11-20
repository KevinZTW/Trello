import React, { useState } from "react";
import "../css/List.css";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { ADDCARD, CHANGETITLE } from "../redux/actions";
import { Droppable } from "react-beautiful-dnd";
import { nanoid } from "nanoid";

export default function List(props) {
  const [isEdit, setEdit] = useState(false);
  const [titleisEdit, settitleEdit] = useState(false);
  const [input, setInput] = useState("");
  const [newtitle, setNewTitle] = useState(props.title);
  const dispatch = useDispatch();

  function addCard() {
    if (input !== "") {
      dispatch(ADDCARD(props.id, input, "card-" + nanoid()));
    }

    setInput("");
  }
  function handleChange(e) {
    setInput(e.target.value);
  }
  let card = [];

  useSelector((state) => {
    let cardIds = props.cardIds;
    let cards = state.cardReducer;
    let count = 0;
    for (let i in cardIds) {
      for (let l in cards) {
        if (cards[l].id === cardIds[i]) {
          card.push(
            <Card
              title={cards[l].title}
              id={cards[l].id}
              key={cards[l].id}
              index={count}
            />
          );
          count++;
        }
      }
    }
  });

  const showview = (
    <div
      className="list"
      id={props.id}
      onClick={() => {
        settitleEdit(false);
      }}
    >
      {titleisEdit ? (
        <div>
          <input
            type="text"
            value={newtitle}
            onClick={(e) => {
              e.stopPropagation();
            }}
            onChange={(e) => {
              setNewTitle(e.target.value);
            }}
            onBlur={() => {
              settitleEdit(false);
              dispatch(CHANGETITLE(props.id, newtitle));
            }}
          />
        </div>
      ) : (
        <div
          className="title"
          onClick={(e) => {
            e.stopPropagation();
            settitleEdit(true);
          }}
        >
          {props.title}
        </div>
      )}

      <Droppable droppableId={props.id}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="cardWrapper"
          >
            {card}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
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
      <Droppable droppableId={props.id}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="cardWrapper"
          >
            {card}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
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
