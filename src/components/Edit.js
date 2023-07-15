import React from "react";
import "./edit.css";

export default function EditTask({ onClick }) {
  const handleUpdateCancelClick = () => {
    onClick();
  };
  const handleUpdate= () => {
    alert("Updated successful")
    handleUpdateCancelClick();
  };
  return (
    <div className="bg-flex">
    <div className="edit-bod">
      <div className="edit-container">
      <h1>EDIT TASK</h1>
        <div>
          <div className="edit-box">
            <input
              type="title"
              className="title elel"
              placeholder="Enter Title"
            />
            <textarea
              className="edit-description"
              placeholder="Enter description"
              // value={description}
            />
            <input type="date" className="edit-date" />
            <input type="time" className="edit-time" />
            <div className="edit-cc">
              <button className="edit-clkbtn" onClick={handleUpdate}>Update</button>
              <button className="edit-clkbtn" onClick={handleUpdateCancelClick}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
