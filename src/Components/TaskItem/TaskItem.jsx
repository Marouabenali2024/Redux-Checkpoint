import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setDone, editTask, deleteTask } from "../../redux/todoSlice";
import { FaCheckCircle, FaTrash } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import "./TaskItem.css";

function TaskItem({ title, status, id, dateTime }) {
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleDone = () => {
    dispatch(setDone(id));
  };

  const handleEdit = () => {
    if (isEditing && newTitle.trim() !== "") {
      dispatch(editTask({ id, newTitle }));
    }
    setIsEditing(!isEditing);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setNewTitle(title);
  };

  const handleDelete = () => {
    dispatch(deleteTask(id));
  };

  return (
    <div
      className="task-item"
      style={{
        backgroundColor: status === "complete" ? "#d8ead8" : "#ffe2dd",
        borderRadius: "15px",
        padding: "10px", 
      }}
    >
      {isEditing ? (
        <div className="edit-task">
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="edit-input"
          />
          <button className="save-btn" onClick={handleEdit}>
            Save
          </button>
          <button className="cancel-btn" onClick={handleCancelEdit}>
            Cancel
          </button>
        </div>
      ) : (
        <h3
          style={{
            textDecoration: status === "complete" ? "line-through" : "none",
            paddingLeft: "10px", 
          }}
        >
          {title}
        </h3>
      )}

      <div className="task-date-time">
        <small>on: {new Date(dateTime).toLocaleString()}</small>
      </div>

      <div className="task-actions">
        <div className="icon-circle" onClick={handleDone}>
          <FaCheckCircle />
        </div>
        <div className="icon-circle edit" onClick={handleEdit}>
          <CiEdit />
        </div>
        <div className="icon-circle delete" onClick={handleDelete}>
          <FaTrash />
        </div>
      </div>
    </div>
  );
}

export default TaskItem;
