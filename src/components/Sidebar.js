import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import "./sidebar.css";
import Loginsignup from "./Loginsignup";
import { logout } from "../redux/actions";

function Sidebar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = () => {
    setIsOpen(true);
  };
  const handleLogout = () => {
    dispatch(logout());
    setIsLoggedIn(false);
  };
  const handleLoginClick = () => {
    setIsLoggedIn(true);
    // handleCancel();
  };
  const handleCancel = () => {
    setIsOpen(false);
  };
  
  return (
    <div>
      <div className="parent" >
        <div class="left-pane">
          <h2>TODO</h2>
          <div class="nav__links">
            <ul className="nav-btns">
              <li>
                <a href="#">
                  <i class="fi-rr-apps"></i>
                  <span>Task Views</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fi-rr-browser"></i>
                  <span>Today</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fi-rr-comment-alt"></i>
                  <span>Upcoming</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fi-rr-document-signed"></i>
                  <span>Completed Tasks</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fi-rr-lock"></i>
                  <span>Help/Support</span>
                </a>
              </li>
              <li class="logout-btn-outline">
                {isLoggedIn ? (
                  <button onClick={handleLogout} className="logout">
                    Logout
                  </button>
                ) : (
                  <button onClick={handleLogin} className="log">
                    Login / SignUp
                  </button>
                )}
              </li>
              <p className="bottom">&copy; 2023 TODO.All rights reserved.</p>
            </ul>
          </div>
        </div>
        {isOpen && <Loginsignup onClick1={handleLoginClick} onClick2={handleCancel}/>}
      </div>
    </div>
  );
}

export default Sidebar;
