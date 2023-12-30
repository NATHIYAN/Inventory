import React from "react";
//import React, { useEffect, useState } from 'react';
import "../../../styles/new-form.css";

const NewCustomer = () => {
  return (
    <div className="newCustomer-container">
      <div className="text">New Customer</div>
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
              <label htmlFor="id">ID</label>
              <input className="input" type="number" id="id" required />
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

            <div className="two-together">
              <div className="form-item">
                <label htmlFor="state">DEPARTMENT</label>
                <input
                  className="input"
                  type="text"
                  id="state"
                  maxLength="45"
                  required
                />
              </div>
              <div className="form-item">
                <label htmlFor="city">CITY</label>
                <input
                  className="input"
                  type="text"
                  id="city"
                  maxLength="45"
                  required
                />
              </div>
            </div>

            <div className="form-item">
              <label htmlFor="address">ADDRESS</label>
              <input
                className="input"
                type="text"
                id="address"
                maxLength="100"
                required
              />
            </div>
          </div>

          <button type="submit" className="button-container">
            Add Customer
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewCustomer;
