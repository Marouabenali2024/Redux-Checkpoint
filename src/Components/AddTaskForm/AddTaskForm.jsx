import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addNewTask } from "../../redux/todoSlice";
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css"; 
import { FaPlus } from "react-icons/fa";
import "./AddTaskForm.css";


function AddTaskForm() {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [dueDate, setDueDate] = useState(new Date()); 
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setNewTaskTitle(e.target.value);
  };

  const handleAddTask = () => {
    if (newTaskTitle.trim()) {
      dispatch(addNewTask({ title: newTaskTitle.trim(), dueDate }));
      setNewTaskTitle("");
      setDueDate(new Date()); 
    }
  };

  return (
    <Form>
      <div className="form-container">
        {" "}
        <Form.Group controlId="formTask" className="form-group">
          <Form.Control
            type="text"
            id="inputTask"
            placeholder="Enter task title"
            value={newTaskTitle}
            onChange={handleChange}
            className="task-input"
          />

          <DatePicker
            selected={dueDate}
            onChange={setDueDate}
            dateFormat="MMMM d, yyyy h:mm aa"
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            className="form-control"
          />

          <Button
            onClick={handleAddTask}
            variant="#007bff"
            className="add-task-button"
            aria-label="Add Task"
          >
            <FaPlus />
          </Button>
        </Form.Group>
      </div>
    </Form>
  );
}

export default AddTaskForm;
