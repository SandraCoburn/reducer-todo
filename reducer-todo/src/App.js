import React, { useReducer } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { todoReducer, taskList } from "./reducers/todoReducer";

import "./App.css";

const initialState = taskList;

function App() {
  const [state, dispatch] = useReducer(todoReducer, taskList);

  return (
    <div className="App">
      <div className="header">
        <h1>To do list:</h1>
        <TodoForm state={state} dispatch={dispatch} />
      </div>
      <TodoList taskList={initialState} dispatch={dispatch} />
    </div>
  );
}

export default App;
