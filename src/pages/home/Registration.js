// Registration.js

import React, { useState } from "react";
import RegistrationLayout from "./RegistrationLayout";
import "./registration.css";

const Registration = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform registration logic with the entered details
    console.log("Submitted Registration Details:", username, email, password);
    // Add further logic for registration process
  };

  return (
    <RegistrationLayout>
      <div className="registration-content">
        <form onSubmit={handleSubmit}>
          <h2 className="title">Create an Account</h2>
          <div className="input-div">
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Username"
              required
            />
          </div>
          <div className="input-div">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
              required
            />
          </div>
          <div className="input-div">
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="btn">
            Sign Up
          </button>
        </form>
      </div>
    </RegistrationLayout>
  );
};

export default Registration;
