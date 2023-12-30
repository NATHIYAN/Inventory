import React from "react";
//import React, { useEffect, useState } from 'react';
import "../../../styles/new-form.css";
import "./NewItem";

const NewItem = () => {
  return (
    <div className="newItem-container">
      <div className="text">New Article</div>
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

            <div className="two-together">
              <div className="form-item">
                <label htmlFor="stock">STOCK</label>
                <input
                  className="input"
                  type="number"
                  min="0"
                  id="stock"
                  required
                />
              </div>
              <div className="form-item">
                <label htmlFor="weight">WEIGHT</label>
                <input
                  className="input"
                  type="text"
                  id="weight"
                  maxLength="15"
                  required
                />
              </div>
            </div>

            <div className="form-item">
              <label htmlFor="brand">BRAND</label>
              <input
                className="input"
                type="text"
                id="brand"
                maxLength="45"
                required
              />
            </div>

            <div className="two-together">
              <div className="form-item">
                <label htmlFor="purchasePrice">PURCHASE PRICE</label>
                <input
                  className="input"
                  type="number"
                  id="purchasePrice"
                  required
                />
              </div>
              <div className="form-item">
                <label htmlFor="salePrice">SALES PRICE</label>
                <input
                  className="input"
                  type="number"
                  id="salePrice"
                  required
                />
              </div>
            </div>

            <div className="form-item">
              <label htmlFor="provider">PROVIDER</label>
              <select className="input" id="provider" required>
                <option selected value="" disabled>
                  Select an option
                </option>
                <option value="1">Lenimp</option>
                <option value="2">Propartes</option>
                <option value="3">Esciclismo</option>
              </select>
            </div>

            <div className="form-item">
              <label htmlFor="category">CATEGORIES</label>
              <select className="input" id="category" required>
                <option selected value="" disabled>
                  Select an option
                </option>
                <option value="1">Frenos</option>
                <option value="2">Llantas</option>
                <option value="3">Pachas</option>
              </select>
            </div>
          </div>

          <button type="submit" className="button-container">
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewItem;
