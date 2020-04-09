import { v4 as id } from "uuid";

// create inital state object
const initialState = [
  { item: "Learn about reducers", completed: false, id: id() },
];

const ADD = "ADD";
//defined and export an initial state and a reducer function
const reducer = (currentState, action) => {
  return currentState;
};

export { reducer, initialState };
