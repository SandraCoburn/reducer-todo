import React, { useReducer } from "react";
import TodoForm from "./components/TodoForm";
import { todoReducer, toDoList } from "./reducers/todoReducer";

import "./App.css";

const initialState = toDoList;

function App() {
  const [state, dispatch] = useReducer(todoReducer, toDoList);

  // togleItem = id => {
  //   const newTodoList = state.initialState.map(item => {
  //     if (item.id === id) {
  //       return {
  //         ...DataTransferItemList,
  //         completed: !item.completed
  //       }
  //     }
  //   })
  // }
  return (
    <div className="App">
      <div className="header">
        <h1>To do list:</h1>
        <TodoForm state={state} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;
