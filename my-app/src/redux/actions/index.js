const AddTask = (name) => {
  return {
    type: "AddTask",
    name: name,
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
export { AddTask, DeleteTask, ToggleTask, EditTask };
