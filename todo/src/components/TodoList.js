import React, { useReducer } from "react";
import { v4 as id } from "uuid";
import Todo from "./Todo";
import { reducer, initialState } from "../reducers/reducer";

export default function TodoList() {
  // call the useReducer hook and pass the reducer and the inital state
  const [todoList, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      {/* map over the todoList and renders all items */}
      {todoList.map((todo) => (
        <Todo todo={todo} key={id()} />
      ))}
    </div>
  );
}
