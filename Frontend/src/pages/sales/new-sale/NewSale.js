import React, { useState } from "react";
import "./NewSale.css"; // Import the CSS file for styles

const NewSale = () => {
  const [formData, setFormData] = useState({
    date: "",
    customer: "",
    user: "",
    total: "",
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

    // Reset the form fields after submission
    setFormData({
      date: "",
      customer: "",
      user: "",
      total: "",
    });
  };

  return (
    <div className="newSale-container">
      <h2>New Sales</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>DATE</label>
          <input
            type="text"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label>CUSTOMER</label>
          <input
            type="text"
            name="customer"
            value={formData.customer}
            onChange={handleInputChange}
            required
            className="input-field"
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
            className="input-field"
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
            className="input-field"
          />
        </div>
        <button type="submit" className="button-container">
          Add Sale
        </button>
      </form>
    </div>
  );
};

export default NewSale;
