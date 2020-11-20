const ADDLIST = (title) => {
  return {
    type: "ADDLIST",
    title: title,
  };
};

//card
const ADDCARD = (listId, title) => {
  return {
    type: "ADDCARD",
    title: title,
    listId: listId,
  };
};

const DeleteTask = (id) => {
  return {
    type: "DeleteTask",
    id: id,
  };
};

const ToggleTask = (id) => {
  return { type: "ToggleTask", id: id };
};
const EditTask = (id, name) => {
  return {
    type: "EditTask",
    name: name,
    id: id,
  };
};
export { ADDLIST, ADDCARD, DeleteTask, ToggleTask, EditTask };
