import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  tasks: [],
};

const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    addNewTask: (state, action) => {
      state.tasks.push({
        id: uuidv4(),
        title: action.payload.title,
        status: "in-progress",
        dateTime: new Date().toISOString(),
      });
    },
    setDone: (state, action) => {
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload ? { ...task, status: "complete" } : task
      );
    },
    editTask: (state, action) => {
      const { id, newTitle } = action.payload;
      state.tasks = state.tasks.map((task) =>
        task.id === id ? { ...task, title: newTitle } : task
      );
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload ? { ...task, status: "deleted" } : task
      );
    },
  },
});

export const { addNewTask, setDone, editTask, deleteTask } = todoSlice.actions;
export default todoSlice.reducer;
