const ADDLIST = (title) => {
  return {
    type: "ADDLIST",
    title: title,
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
export { ADDLIST, DeleteTask, ToggleTask, EditTask };
