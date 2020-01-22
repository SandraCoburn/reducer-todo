import React, { useState } from "react";

const TodoForm = ({ state, dispatch }) => {
  const [todoText, setTodoText] = useState("");
  console.log(state);

  const handleChanges = event => {
    setTodoText(event.target.value);
  };
  //   const handleSubmit = () => {
  //     // event.preventDefault();
  //     dispatch({ type: "ADD_TODO", payload: todoText });
  //     console.log("this is", todoText);
  //     setTodoText({
  //       todoText: ""
  // });
  //   };
  return (
    <form autoComplete="off">
      <input
        autoComplete="off"
        type="text"
        name="item"
        value={todoText}
        onChange={handleChanges}
      />
      <button
        type="button"
        onClick={() => dispatch({ type: "ADD_TODO", payload: todoText })}
      >
        Add Todo
      </button>
    </form>
  );
};
export default TodoForm;
