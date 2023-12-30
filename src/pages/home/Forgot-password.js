// ForgotPassword.js

import React from "react";
import { Link } from "react-router-dom";
import "./Forgot-password.css";

const ForgotPassword = () => {
  return (
    <div className="forgot-password-content">
      <h2 className="title">Forgot Password</h2>
      <p>Please enter your email address to reset your password.</p>
      <form>
        <div className="input-div">
          <div className="div">
            <h5>Email</h5>
            <input type="email" className="input" required />
          </div>
        </div>
        <button type="submit" className="btn">
          Reset Password
        </button>
      </form>
      <Link to="/Login">Back to Login</Link>
    </div>
  );
};

export default ForgotPassword;
