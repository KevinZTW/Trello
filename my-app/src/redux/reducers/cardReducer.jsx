//reducer
import { nanoid } from "nanoid";
const card = [
  { id: "card-0", title: "Go crazy" },
  { id: "card-1", title: "youtube video" },
  { id: "card-2", title: "there's no hope in life" },
  { id: "card-3", title: "triple for loop is awesome" },
];

const cardReducer = (state = card, action) => {
  switch (action.type) {
    // case "DeleteTask":
    //   let remaintasks = state.tasks.filter((task) => task.id != action.id);

    //   return { tasks: remaintasks };
    case "ADDCARD":
      console.log(state);
      console.log(action.newcardId);

      return [
        ...state,
        {
          id: action.newcardId,
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
