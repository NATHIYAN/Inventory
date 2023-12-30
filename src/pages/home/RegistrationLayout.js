// RegistrationLayout.js

import React from "react";
import logo from "../../assets/logo.png";
import wave from "../../assets/wave.png";
import registrationBg from "../../assets/registrationbg.svg";
import "./registration.css"; // You can create a separate CSS file for registration if needed

const RegistrationLayout = ({ children }) => {
  return (
    <div className="registration-container">
      <link rel="icon" href={logo} />
      <img className="wave" src={wave} alt="background-wave" />
      <div className="container">
        <div className="img">
          <img src={registrationBg} alt="background-img" />
        </div>
        {children}
      </div>
    </div>
  );
};

export default RegistrationLayout;
