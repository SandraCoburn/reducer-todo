import React, { useState } from "react";
const TodoForm = ({ state, dispatch }) => {
  const [todoText, setTodoText] = useState("");

  const handleChanges = event => {
    setTodoText({
      todoText: event.target.value
    });
  };
  const handleSubmit = event => {
    event.preventDefault();
    dispatch({ type: "ADD_TODO", payload: todoText });
    setTodoText({
      todoText: ""
    });
  };
  return (
    <form>
      <input
        type="text"
        name="item"
        value={todoText}
        onChange={handleChanges}
      />
      <button>Add Todo</button>
    </form>
  );
};
export default TodoForm;
