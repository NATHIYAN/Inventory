// home.js

import React from "react";
import logo from "../../assets/loader.gif";
import "./home.css";

const Home = () => {
  return (
    <div className="navContainer">
      <div class="header">
        <img src={logo} alt="Website Logo" class="logo" />
        <div className="buttons">
          <a href="/Registration.js" className="button-container">
            Register
          </a>
          <a href="/Login.js" className="button-container">
            Login
          </a>
        </div>
      </div>
      <h1 className="title">Kairasi Steels & Hardwares</h1>
    </div>
  );
};

export default Home;
