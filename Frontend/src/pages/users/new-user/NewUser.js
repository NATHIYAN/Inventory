import React from "react";
//import React, { useEffect, useState } from 'react';
import "./NewUser.css";
const NewUser = () => {
  return (
    <div className="newUser-container">
      <div className="text">New User</div>
      <div className="form-container">
        <form>
          <div className="grid-form">
            <div className="form-item">
              <label htmlFor="name">NAME</label>
              <input
                className="input"
                type="text"
                id="name"
                maxLength="45"
                required
              />
            </div>

            <div className="form-item">
              <label htmlFor="nuser">USER</label>
              <input
                className="input"
                type="text"
                maxLength="20"
                id="nuser"
                required
              />
            </div>

            <div className="form-item">
              <label htmlFor="pass">PASSWORD</label>
              <input
                className="input"
                type="password"
                id="pass"
                maxLength="15"
                required
              />
            </div>

            <div className="form-item">
              <label htmlFor="tel">PHONE</label>
              <input
                className="input"
                type="text"
                id="tel"
                maxLength="20"
                required
              />
            </div>

            <div className="form-item">
              <label htmlFor="email">EMAIL</label>
              <input
                className="input"
                type="email"
                id="email"
                maxLength="100"
                required
              />
            </div>

            <div className="form-item">
              <label htmlFor="admin">ADMIN</label>
              <select className="input" id="admin" required>
                <option value="true">Yes</option>
                <option selected value="false">
                  No
                </option>
              </select>
            </div>
          </div>

          <button type="submit" className="button-container">
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewUser;
