import React, { useState, useReducer } from "react";
export const todoReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_TASK":
      return {
        ...state,
        taskList: state.taskList.map(task => {
          if (task.id === taskList.id) {
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
        taskList: state.taskList.filter(task => task.completed === false)
      };
    case "ADD_TODO":
      const newItem = {
        task: newItem,
        id: Date.now(),
        completed: false
      };
      return {
        ...state,
        toDoList: [...state, taskList, action.payload]
      };
    default:
      return state;
  }
};

export const taskList = [
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
