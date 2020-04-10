export const initialState = [
  {
    id: 0,
    task: "Welcome to my new reducer todo app!",
    completed: false,
    tags: ["app", "react", "javascript"],
    due: "2025-04-16",
  },
  {
    id: 1,
    task: "Take a look around.",
    completed: false,
    tags: [],
    due: "2025-07-25",
  },
  {
    id: 2,
    task: "Separate your tags with commas",
    completed: false,
    tags: ["one", "two", "three", "tag"],
    due: "2025-03-17",
  },
  {
    id: 3,
    task: "Click on a tag to filter your todos",
    completed: false,
    tags: ["tag"],
    due: "2025-03-17",
  },
];

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_LIST":
      let tag =
        action.payload.tags === "" ? [null] : action.payload.tags.split(",");
      return [
        ...state,
        {
          id: Date.now(),
          task: action.payload.task,
          completed: false,
          tags: tag,
          due: action.payload.due,
        },
      ];
    case "TOGGLE_COMPLETION":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      });
    case "UPDATE_DATE":
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            due: action.payload.date,
          };
        } else {
          return todo;
        }
      });
    case "CLEAR_COMPLETED":
      return state.filter((todo) => !todo.completed);
    case "SAVE_CHANGES":
      localStorage.setItem("todos", JSON.stringify(state));
      return state;
    default:
      return state;
  }
};
