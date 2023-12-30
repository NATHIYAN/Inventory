// home.js

import React from "react";
import logo from "../../assets/loader.gif";
import "./home.css";

const Home = () => {
  return (
    <div class="header">
      <img src={logo} alt="Website Logo" class="logo" />

      <h1 className="title">Kairasi Steels & Hardwares</h1>
      <div className="buttons">
        <a href="/Registration.js" className="button-container">
          Register
        </a>
        <a href="/Login.js" className="button-container">
          Login
        </a>
      </div>
    </div>
  );
};

export default Home;
