import React from "react";
import "./home.css";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-box">
        <h1>Welcome to PopX</h1>
        <p>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,</p>
        <button className="btn primary">
          <Link style={{textDecoration:"none"}} className="btn primary" to='/signup'>Create Account</Link>
        </button>
        <button className="btn secondary">
        <Link style={{textDecoration:"none"}} className="btn secondary" to='/login'>Already Registered? Login</Link>
       </button>
      </div>
    </div>
  );
};

export default Home;
