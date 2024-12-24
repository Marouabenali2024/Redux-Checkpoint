import React, { useState } from "react";
import "./App.css";
import AddTaskForm from "./Components/AddTaskForm/AddTaskForm";
import TasksList from "./Components/TasksList/TasksList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskTitle) => {
    const currentDateTime = new Date();
    const taskDateTime = currentDateTime.toLocaleString(); 

    const newTask = {
      title: taskTitle,
      id: Date.now(),
      dateTime: taskDateTime, 
    };

    setTasks([...tasks, newTask]);
  };

  return (
    <div id="App">
      <h1>To-Do App</h1>
      <AddTaskForm addTask={addTask} />
      <TasksList tasks={tasks} />
    </div>
  );
}

export default App;
