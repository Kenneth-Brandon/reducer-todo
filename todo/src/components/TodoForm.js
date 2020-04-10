import React, { useState } from "react";
import "./TodoForm.css";

export default function TodoForm({ dispatch }) {
  const [values, setValues] = useState({
    task: "",
    tags: "",
    due: "",
  });
  const [emptyTask, setEmptyTask] = useState(false);

  const handleChange = (event) => {
    if (event.target.value.length <= 40) {
      setValues({
        ...values,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.task !== "") {
      setEmptyTask(false);
      dispatch({
        type: "ADD_TO_LIST",
        payload: values,
      });
      dispatch({ type: "SAVE_CHANGES" });
      setValues({
        task: "",
        tags: "",
        due: "",
      });
    }
    // ".task" string is empty
    else {
      setEmptyTask(true);
      setTimeout(() => {
        setEmptyTask(false);
      }, 1000);
    }
  };

  return (
    <div className="todo-form">
      <form autoComplete="off">
        <div>
          <label
            style={emptyTask ? { color: "tomato" } : { color: "white" }}
            htmlFor="task"
          >
            Task:
          </label>
          <input
            type="text"
            name="task"
            id="task"
            value={values.task}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="tags">Tags:</label>
          <input
            type="text"
            name="tags"
            id="tags"
            value={values.tags}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="due">Due:</label>
          <input
            type="date"
            name="due"
            id="due"
            value={values.due}
            onChange={handleChange}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          <i className="fas fa-plus"></i>
        </button>
      </form>
    </div>
  );
}
