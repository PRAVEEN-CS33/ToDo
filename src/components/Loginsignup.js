import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { setResponseData} from "../redux/actions";
import "./loginsignup.css";
import axios from 'axios';

function Loginsignup({ onClick1, onClick2 }) {
  const [isSliderMoved, setSliderMoved] = useState(false);
  const [isFormSectionMoved, setFormSectionMoved] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupConfirmPassword, setSignupConfirmPassword] = useState("");
  const dispatch = useDispatch();

  const handleSignupClick = () => {
    setSliderMoved(true);
    setFormSectionMoved(true);
  };
  const handleLoginClick = () => {
    setSliderMoved(false);
    setFormSectionMoved(false);
  };
  const handleClick = () => {
    onClick2();
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (loginEmail.trim() === "" || loginPassword.trim() === "") {
      alert("Please enter email and password");
      return;
    }
    if (!isValidEmail(loginEmail)) {
      alert("Invalid email format");
      return;
    }
    if (!isPasswordValid(loginPassword)) {
      alert("Invalid password format");
      return;
    }
    fetchData();
  };
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (
      signupName.trim() === "" ||
      signupEmail.trim() === "" ||
      signupPassword.trim() === "" ||
      signupConfirmPassword.trim() === ""
    ) {
      alert("Please fill all the fields");
      return;
    }
    if (!isValidEmail(signupEmail)) {
      alert("Invalid email format");
      return;
    }
    if (!isPasswordValid(signupPassword)) {
      alert(
        "Invalid password!\nPassword should be at least 8 characters long\nPassword should contain at least one lowercase letter\nPassword should contain at least one uppercase letter\nPassword should contain at least one digit\nPassword should contain at least one special character"
      );
      return;
    }
    if (signupPassword !== signupConfirmPassword) {
      alert("Passwords do not match");
      return;
    }
    handleAddAccount()
    alert("Sign up successful!");
    handleLoginClick();
  };
  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  const isPasswordValid = (password) => {
    const minLength = 8;
    const complexityRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

    if (password.length < minLength) {
      return false;
    }

    if (!complexityRegex.test(password)) {
      return false;
    }

    return true;
  };
  
  const handleAddAccount = async () => {
    const accountData = {
      id: "",
      username: signupName,
      email: signupEmail,
      password: signupPassword,
      todos: []
    };
    try {
      const response = await axios.post(
        "http://localhost:3003/accounts",
        accountData
      );
      console.log("Account added successfully:", response.data);
    } catch (error) {
      console.error("Error adding account:", error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3003/accounts', {
        params: {
          email: loginEmail,
          password: loginPassword
        }
      });
      const user = response.data;
      if(user.length===0){
        alert("User not found!");
      }else{
        dispatch(setResponseData(user[0]));
        onClick1();
        onClick2();
        alert("Login successful!");
        console.log(user[0]);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <div className="bod">
      <div className="container">
        <div className="btn">
          <button className="login" onClick={handleLoginClick}>
            Login
          </button>
          <button className="signup" onClick={handleSignupClick}>
            Signup
          </button>
        </div>

        <div className={`slider ${isSliderMoved ? "moveslider" : ""}`}></div>
        <div
          className={`form-section ${
            isFormSectionMoved ? "form-section-move" : ""
          }`}
        >
          <form className="login-box" onSubmit={handleLoginSubmit}>
            <input
              type="email"
              className="email ele"
              placeholder="youremail@example.com"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <input
              type="password"
              className="password ele"
              placeholder="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <div className="cc">
              <button className="clkbtn">Login</button>
              <button className="clkbtn" onClick={handleClick}>
                Cancel
              </button>
            </div>
          </form>

          <form className="signup-box" onSubmit={handleSignupSubmit}>
            <input
              type="text"
              className="name ele"
              placeholder="Enter your name"
              value={signupName}
              onChange={(e) => setSignupName(e.target.value)}
            />
            <input
              type="email"
              className="email ele"
              placeholder="youremail@example.com"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
            />
            <input
              type="password"
              className="password ele"
              placeholder="password"
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
            />
            <input
              type="password"
              className="password ele"
              placeholder="Confirm password"
              value={signupConfirmPassword}
              onChange={(e) => setSignupConfirmPassword(e.target.value)}
            />
            <div className="cc">
              <button className="clkbtn">Signup</button>
              <button className="clkbtn" onClick={handleClick}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Loginsignup;
