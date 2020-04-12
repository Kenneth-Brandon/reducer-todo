import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import moment from "moment";
import "./Todo.css";

export default function Todo({ todo, dispatch, setTags, selectedTags }) {
  const [overdue, setOverdueStatus] = useState(false);

  useEffect(() => {
    if (moment().diff(todo.due, "days") > 0) {
      setOverdueStatus(true);
    }
  }, [todo]);

  const handleChange = (event) =>
    dispatch({ type: "TOGGLE_COMPLETION", payload: event.target.value });

  const updateTags = (tag) => {
    let alreadyPresent = false;
    selectedTags.forEach((selectedTag) => {
      if (selectedTag === tag) {
        alreadyPresent = true;
      }
    });
    if (alreadyPresent === false && selectedTags.length < 5) {
      setTags([...selectedTags, tag]);
    }
  };

  return (
    <div
      className={overdue ? "todo overdue" : "todo"}
      onClick={() => {
        dispatch({ type: "TOGGLE_COMPLETION", payload: todo.id });
        dispatch({ type: "SAVE_CHANGES" });
      }}
    >
      <div className={todo.completed ? "completed" : ""}>
        <input
          type="checkbox"
          id={`todo-${todo.id}`}
          checked={todo.completed}
          onChange={handleChange}
        />
        <label onClick={(e) => e.preventDefault()} htmlFor={`todo-${todo.id}`}>
          {todo.task}
        </label>
      </div>
      <div className="tags">
        {todo.tags.map((tag, index) => (
          <div
            key={`todo-${todo.id}-tag-${index}`}
            className={tag !== null ? "tag" : ""}
            onClick={(e) => {
              e.stopPropagation();
              updateTags(tag);
            }}
          >
            {tag}
          </div>
        ))}
      </div>
      <div style={overdue ? { color: "red" } : { color: "inherit" }}>
        {todo.due && <Moment format="MMM Do, YYYY" date={todo.due} />}
      </div>
    </div>
  );
}
