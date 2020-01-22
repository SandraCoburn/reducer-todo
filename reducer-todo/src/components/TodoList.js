import React from "react";
import Todo from "./Todo";

const TodoList = ({ state, dispatch }) => {
  //   const sortedList = state.sort((a, b) => a.completed - b.completed);

  return (
    <div className="todo-list">
      {state.todos.map(item => (
        <Todo key={item.id} item={item} dispatch={dispatch} />
      ))}
      <button
        className="clear-btn"
        onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}
      >
        Clear Completed
      </button>
    </div>
  );
};
export default TodoList;
