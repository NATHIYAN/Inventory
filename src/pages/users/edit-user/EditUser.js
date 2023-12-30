import React from "react";
import "./EditUser.css";

const EditUser = () => {
  // Assuming user details are passed as props (e.g., userDetails)
  // const { name, username, password, telephone, email, isAdmin } = userDetails;

  return (
    <div className="editUser-container">
      <div className="text">Edit User</div>
      <div className="form-container">
        <form>
          <div className="grid-form">
            <div className="form-item">
              <label htmlFor="name">Name</label>
              <input
                className="input"
                type="text"
                id="name"
                maxLength="45"
                required
              />
            </div>

            <div className="form-item">
              <label htmlFor="nuser">User</label>
              <input
                className="input"
                type="text"
                maxLength="20"
                id="nuser"
                required
              />
            </div>

            <div className="form-item">
              <label htmlFor="pass">New Password</label>
              <input
                className="input"
                type="password"
                id="pass"
                maxLength="15"
              />
            </div>

            <div className="form-item">
              <label htmlFor="tel">Phone</label>
              <input
                className="input"
                type="text"
                id="tel"
                maxLength="20"
                required
              />
            </div>

            <div className="form-item">
              <label htmlFor="email">Wmail</label>
              <input
                className="input"
                type="email"
                id="email"
                maxLength="100"
                required
              />
            </div>

            <div className="form-item">
              <label htmlFor="admin">Admin</label>
              <select className="input" id="admin" required>
                <option value="true">Si</option>
                <option value="false">No</option>
              </select>
            </div>
          </div>

          <div className="button-container">
            <button type="submit" className="btn">
              Add user
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
