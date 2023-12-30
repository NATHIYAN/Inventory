import React from "react";
//import React, { useEffect, useState } from 'react';
import "../../../styles/new-form.css";
import "./new-category.css";

const NewCategory = () => {
  return (
    <div className="newCategory-container">
      <div className="text">New Category</div>
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
          </div>

          <button type="submit" className="button-container">
            Add Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewCategory;
