const ADDLIST = (title) => {
  return {
    type: "ADDLIST",
    title: title,
  };
};

//card
const ADDCARD = (listId, title, newcardId) => {
  return {
    type: "ADDCARD",
    title: title,
    listId: listId,
    newcardId: newcardId,
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

const SWITCHCARDINLIST = (listId, destination, source) => {
  console.log(listId);
  return {
    type: "SWITCHCARDINLIST",
    listId: listId,
    destination: destination,
    source: source,
  };
};

export { SWITCHCARDINLIST, ADDLIST, ADDCARD, DeleteTask, ToggleTask, EditTask };
