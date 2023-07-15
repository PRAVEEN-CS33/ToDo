import React from "react";
import "./card.css";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { deleteTodo } from "../redux/actions";

defineElement(lottie.loadAnimation);

export default function Card({ onClick, data }) {
  const dispatch = useDispatch();
  const handleedit = () => {
    onClick();
  };
  const handledelete = async () => {
    alert("Task deleted!");
    dispatch(deleteTodo(data.id));
  };
  
  const handleUpdateTodo = (id, updatedTodo) => {
    dispatch(updateTodo(id, updatedTodo));
  };
  const handleDone = () => {
    alert("Task Completed !");
  };
  return (
    <div className="card">
      <div className="text">
        <h4 className="tle">{data.task}</h4>
        <p>{data.description}</p>
        <p>Due Date:{data.dueDate}</p>
        <p>Time:{data.time}</p>
      </div>
      <div className="bttn">
        <div onClick={handleDone}>
          <lord-icon
            src="https://cdn.lordicon.com/hrqqslfe.json"
            trigger="hover"
            colors="primary:#121331,secondary:#30e849"
            style={{ width: "6vh", height: "6vh" }}
          ></lord-icon>
        </div>
        <div onClick={handleedit}>
          <lord-icon
            src="https://cdn.lordicon.com/rfbqeber.json"
            trigger="hover"
            colors="primary:#66a1ee,secondary:#646e78,tertiary:#3080e8"
            style={{ width: "6vh", height: "6vh" }}
          ></lord-icon>
        </div>
        <div onClick={handledelete}>
          <lord-icon
            src="https://cdn.lordicon.com/qjwkduhc.json"
            trigger="hover"
            colors="primary:#646e78,secondary:#e83a30,tertiary:#ebe6ef"
            style={{ width: "6vh", height: "6vh" }}
          ></lord-icon>
        </div>
      </div>
      <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
    </div>
  );
}
