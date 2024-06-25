import { useState } from "react";
import "./TodoApp.css";

export default function TodoApp() {
  return (
    <div className="TodoApp">
      Todo Management Application
      <LoginComponent />
      {/* <WelcomeComponent/> */}
    </div>
  );
}

function LoginComponent() {
  const [username, setUser] = useState("");
  const [password, setPass] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  function handleUserNameChange(event) {
    setUser(event.target.value);
  }

  function handlePassChange(event) {
    setPass(event.target.value);
  }

  function handleLogin() {
    if (username === "madhu" && password === "dummy") {
      setShowSuccess(true);
      setShowError(false);
    } else {
      setShowSuccess(false);
      setShowError(true);
    }
  }

  return (
    <div className="login">
      {showSuccess && (
        <div className="successMessage">Authentication Successful</div>
      )}
      {showError && (
        <div className="errorMessage">
          Authentication failed. Please check your credentials!!
        </div>
      )}

      <div className="loginForm">
        <div>
          <label>UserName</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleUserNameChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePassChange}
          />
        </div>
        <div>
          <button type="submit" name="login" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

function WelcomeComponent() {
  return <div className="welcome">Welcome Component</div>;
}
