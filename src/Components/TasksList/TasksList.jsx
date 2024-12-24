import React, { useState } from "react";
import { useSelector } from "react-redux";
import Alert from "react-bootstrap/Alert";
import { AiOutlinePlusCircle } from "react-icons/ai";
import "./TasksList.css";
import TaskItem from "../TaskItem/TaskItem";

function TasksList() {
  const { tasks } = useSelector((store) => store.todoReducer);
  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "deleted") {
      return task.status === "deleted";
    }

    if (task.status === "deleted") return false;

    if (filter === "all") return true;

    if (filter === "pending") return task.status === "in-progress";

    return task.status === filter;
  });

  return (
    <div id="tasks-list">
      <div className="filters">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("pending")}>Pending</button>
        <button onClick={() => setFilter("complete")}>Complete</button>
        <button onClick={() => setFilter("deleted")}>Deleted</button>
      </div>

      {filteredTasks.length > 0 ? (
        filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            title={task.title}
            status={task.status}
            id={task.id}
            dateTime={task.dateTime}
          />
        ))
      ) : (
        <Alert variant="success">
          <AiOutlinePlusCircle style={{ marginRight: "10px" }} size={24} />
          <Alert.Heading>No tasks</Alert.Heading>
        </Alert>
      )}
    </div>
  );
}

export default TasksList;
