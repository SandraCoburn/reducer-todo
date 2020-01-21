import React from "react";

const Todo = ({ key, item, dispatch }) => {
  const completedStyle = {
    fontSyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
  };

  return (
    <div
      className={`item${item.completed ? " completed" : ""}`}
      onClick={() => dispatch({ type: "TOGGLE_TASK", payload: key })}
    >
      <input type="checkbox" checked={item.completed} />
      <p style={item.completed ? completedStyle : null}>{item.task}</p>
    </div>
  );
};
export default Todo;
