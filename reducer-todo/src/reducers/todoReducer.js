import React, { useState, useReducer } from "react";
export const todoReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_TASK":
      return {
        ...state,
        todos: state.todos.map(task => {
          console.log("task id", task.id);
          console.log("action id", action.payload);
          if (task.id === action.payload) {
            console.log("im in here");
            return {
              ...task,
              completed: !task.completed
            };
          } else {
            return task;
          }
        })
      };
    case "CLEAR_COMPLETED":
      return {
        ...state,
        todos: state.todos.filter(todo => todo.completed === false)
      };
    case "ADD_TODO":
      console.log(action.payload);
      const newTodo = {
        task: action.payload,
        completed: false,
        id: Date.now()
      };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };
    default:
      return state;
  }
};

export const initialState = {
  todos: [
    {
      task: "Make todo list",
      completed: false,
      id: 123
    },
    {
      task: "Update todo list",
      completed: false,
      id: 124
    },
    {
      task: "Delete todo list",
      completed: false,
      id: 125
    },
    {
      task: "Re do todo list",
      completed: false,
      id: 126
    }
  ]
};
