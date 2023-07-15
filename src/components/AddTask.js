import React, {useState}from "react";
import "./addtask.css";
import axios from "axios";
import { useSelector } from "react-redux";

export default function AddTask({ onClick }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const data = useSelector((state => state.responseData))
  const tododata = useSelector((state => state.responseData.todos))
  const handleAddTaskCancelClick = () => {
    onClick();
  };
  const handleAddTask = () => {
    addTodo();
    onClick();
    alert("Task added successful!");
  };
  const addTodo = async () => {
    tododata.push(
      {
        id: Math.floor(Math.random() * 1000) + 1,
        task: title,
        description: description,
        completed: false,
        dueDate: date,
        time: time,
      })
    const newTodo = {
      id: data.id,
      username: data.username,
      email: data.email,
      password: data.password,
      todos: tododata
    };
    try {
      const response = await axios.put(
        `http://localhost:3003/accounts/${data.id}`,
        newTodo
      );
      console.log("Todo added successfully:", response.data);
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };
  return (
    <div className="bod">
      <div className="container">
        <h1>ADD TASKS</h1>
        <div>
          <div className="add-box">
            <input
              type="text"
              className="title ele"
              placeholder="Enter Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              className="description"
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="date"
              className="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <input
              type="time"
              className="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
            <div className="cc">
              <button className="clkbtn" onClick={handleAddTask}>
                Add
              </button>
              <button className="clkbtn" onClick={handleAddTaskCancelClick}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
