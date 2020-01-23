import React, { useReducer } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { todoReducer, initialState } from "./reducers/todoReducer";

import "./App.css";

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div className="App">
      <div className="header">
        <h1>To do list:</h1>
        <TodoForm state={state} dispatch={dispatch} />
      </div>
      <TodoList state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
