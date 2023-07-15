import React, { useState} from "react";
import { Button, Popover } from "antd";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { useSelector } from 'react-redux';
import "./topbar.css";
import Card from "./Card";
import ico from "./ava.jpg";
import AddTask from "./AddTask";
import EditTask from "./Edit";
import Sidebar from "./Sidebar";
import "./sidebar.css";

const content = (
  <div
    style={{
      width: "100px",
      padding: "10%",
      display: "flex",
      justifyContent: "center",
      alignItems: "stretch",
      flexDirection: "column",
    }}
  >
    <h3 style={{ marginBottom: "10%" }}>Profile</h3>
    <h3>Settings</h3>
  </div>
);

export default function Topbar() {
  const [isOpenTask, setIsOpenTask] = useState(false);
  const [isOpenedit, setisOpenedit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  let sdata = useSelector((state) => state.responseData);
  const username = useSelector((state) => state.responseData.username);

  const hadleAddTasks = () => {
    setIsOpenTask(true);
  };
  const hadleAddTasksCancel = () => {
    setIsOpenTask(false);
  };

  const handleopenedit = () => {
    setisOpenedit(true);
  };
  const handlecanceledit = () => {
    setisOpenedit(false);
  };

  const openNav = () => {
    setIsOpen(true);
  };
  const closeNav = () => {
    setIsOpen(false);
  };
  // const handlerefres = async (id) => {
  //   sdata = sdata.todos.filter((todo)=> todo.id !== id)
  //   // const newTodo = {
  //   //   id: sdata.id,
  //   //   username: sdata.username,
  //   //   email: sdata.email,
  //   //   password: sdata.password,
  //   //   todos: sdata
  //   // };
  //   // try {
  //   //   const response = await axios.put(
  //   //     `http://localhost:3003/accounts/1`,
  //   //     newTodo
  //   //   );
  //   //   console.log("Todo added successfully:", response.data);
  //   // } catch (error) {
  //   //   console.error("Error adding todo:", error);
  //   // }
  // }

  return (
    <div className="topbar-parent">
      <div class="right-pane">
        <div class="top">
          <div
            onClick={openNav}
            className={`open-button ${isOpen ? "hide" : ""}`}
            style={{ fontSize: "30px", cursor: "pointer" }}
          >
            <AiOutlineMenu />
          </div>
          <div class="search__bar">
            <input type="text" />
            <div class="search__icon"></div>
          </div>
          <div className="add-ava">
            <div onClick={hadleAddTasks} className="add-click-effect">
              <Button
                class="btt"
                type="primary"
                shape="round"
                icon={<MdOutlineLibraryAdd />}
              >
                Add Tasks
              </Button>
            </div>
            <div className="ava">
              <img src={ico} alt="profile" height={100} width={100} />
              <Popover
                className="pop-topbar"
                placement="bottomRight"
                content={content}
                trigger="hover"
              >
                <h3>{username}</h3>
              </Popover>
            </div>
          </div>
        </div>
        <div className="card-container">
          {
          sdata.todos.length === 0 ? (
            <p className="nothing">No todos found.</p>
          ) : (
            sdata.todos.map((todo) => (
              <Card key={todo.id} onClick={handleopenedit} data={todo} />
            ))
          )}
        </div>
      </div>
      {isOpenTask && <AddTask onClick={hadleAddTasksCancel} />}
      {isOpenedit && <EditTask onClick={handlecanceledit} />}

      <div>
        <div className={`overlay ${isOpen ? "open" : ""}`}>
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
            &times;
          </a>
          <div className="overlay-content">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
