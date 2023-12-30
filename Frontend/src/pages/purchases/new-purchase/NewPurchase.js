import React, { useState } from "react";
import "./NewPurchase.css"; // Import the CSS file for styles

const NewPurchase = () => {
  const [formData, setFormData] = useState({
    date: "",
    total: "",
    supplier: "",
    user: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, for instance:
    // Send formData to an API endpoint or perform any necessary actions
    console.log("Form data:", formData);

    // You can reset the form fields after submission
    setFormData({
      date: "",
      total: "",
      supplier: "",
      user: "",
    });
  };

  return (
    <div className="newPurchase-container">
      <h2>New Purchase</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>DATE</label>
          <input
            type="text"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>TOTAL</label>
          <input
            type="text"
            name="total"
            value={formData.total}
            onChange={handleInputChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>SUPPLIER</label>
          <input
            type="text"
            name="supplier"
            value={formData.supplier}
            onChange={handleInputChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>USER</label>
          <input
            type="text"
            name="user"
            value={formData.user}
            onChange={handleInputChange}
            required
            className="form-input"
          />
        </div>
        <button type="submit" className="button-container">
          Add Purchase
        </button>
      </form>
    </div>
  );
};

export default NewPurchase;
