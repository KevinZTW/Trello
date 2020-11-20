//reducer
import { nanoid } from "nanoid";
const List = [{ listId: "list-0", id: "card-0", title: "Go crazy" }];

const cardReducer = (state = List, action) => {
  switch (action.type) {
    // case "DeleteTask":
    //   let remaintasks = state.tasks.filter((task) => task.id != action.id);

    //   return { tasks: remaintasks };
    case "ADDCARD":
      console.log(state);

      return [
        ...state,
        {
          listId: action.listId,
          id: "card-" + nanoid(),
          title: action.title,
        },
      ];

    // case "ToggleTask":
    //   let updatetasks = state.tasks.map((task) => {
    //     console.log(action.id, task.id);
    //     if (action.id === task.id) {
    //       return { ...task, completed: !task.completed };
    //     }
    //     return task;
    //   });

    //   return { tasks: updatetasks };

    // case "EditTask":
    //   let editTasks = state.tasks.map((task) => {
    //     if (action.id === task.id) {
    //       return { ...task, name: action.name };
    //     }
    //     return task;
    //   });

    //   return { tasks: editTasks };

    default:
      return state;
  }
};

export default cardReducer;
