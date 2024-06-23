import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../index.css'

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    if (user && password) {
      // console.log(user, password);
      navigate("/home");
    } else {
      alert("Please Enter both Email and Password");
    }
  };
  return (
    <div className="container">
      <form>
        <h1>Log In</h1>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            name="email"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            required
          />
        </div>
        <button type="submit" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
