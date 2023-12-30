import React from "react";
//import React, { useEffect, useState } from 'react';

const NewProvider = () => {
  return (
    <div className="newProvider-container">
      <div className="text">New Provider</div>
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
          </div>

          <button type="submit" className="button-container">
            Add Provider
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewProvider;
