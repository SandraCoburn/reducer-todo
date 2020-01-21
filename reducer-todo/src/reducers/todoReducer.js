import React, { useState, useReducer } from "react";
export const todoReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_TASK":
      return {
        ...state,
        toDoList: state.toDoList.map(task => {
          if (task.id === toDoList.id) {
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
        toDoList: state.toDoList.filter(task => task.completed === false)
      };
    case "ADD_TODO":
      const newItem = {
        task: newItem,
        id: Date.now(),
        completed: false
      };
      return {
        ...state,
        toDoList: [...state, toDoList, action.payload]
      };
    default:
      return state;
  }
};

export const toDoList = [
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
];
