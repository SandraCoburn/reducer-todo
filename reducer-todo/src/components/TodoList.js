import React from "react";
import Todo from "./Todo";

const TodoList = ({ taskList, dispatch }) => {
  //   const sortedList = taskList.sort((a, b) => a.completed - b.completed);

  return (
    <div className="todo-list">
      {taskList.map(item => (
        <Todo key={item.id} item={item} dispatch={dispatch} />
      ))}
      <button
        className="clear-btn"
        onClick={() => dispatch({ type: "CLEAR_COMPLETED", payload: "" })}
      >
        Clear Completed
      </button>
    </div>
  );
};
export default TodoList;
