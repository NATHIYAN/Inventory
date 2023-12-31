import React from "react";
//import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "./users.css";
import "../../styles/addbox.css";
import SearchBox from "../../components/search-box/SearchBox";
import Pagination from "../../components/pagination/Pagination";
import { Link } from "react-router-dom";

const Users = () => {
  const handleSearch = (query) => {
    console.log("Busqueda:", query);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete the user?`
    );

    if (confirmDelete) {
      // Call to the api to delete the record by id, modify the state
      console.log(`Registro con ID ${id} eliminado`);
    }
  };

  return (
    <div className="users-container">
      <div className="text">Users</div>

      <div className="options">
        <SearchBox onSearch={handleSearch} />
        <Link to="/new-user" className="add-box">
          <FontAwesomeIcon icon={faPlus} className="icon" />
          <span classname="align"> &nbsp;New User</span>
        </Link>
      </div>

      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>USER</th>
              <th>PHONE</th>
              <th>EMAIL</th>
              <th>ADMIN</th>
              <th>ACTIONES</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Pedro Pablo</td>
              <td>pedropablo</td>
              <td>3208561452</td>
              <td>pedropablov@gmail.com</td>
              <td>Si</td>
              <td>
                <Link to={`/edit-user/${1}`}>
                  <FontAwesomeIcon icon={faPen} className="pen-icon" />
                </Link>
                <FontAwesomeIcon
                  icon={faTrashCan}
                  className="trash-icon"
                  onClick={() => handleDelete(1)}
                />
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Felipe Villamizar</td>
              <td>felipevc</td>
              <td>3148933577</td>
              <td>felipevillamizarc@gmail.com</td>
              <td>Si</td>
              <td>
                <Link to={`/edit-user/${2}`}>
                  <FontAwesomeIcon icon={faPen} className="pen-icon" />
                </Link>
                <FontAwesomeIcon
                  icon={faTrashCan}
                  className="trash-icon"
                  onClick={() => handleDelete(2)}
                />
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Natalia Villa</td>
              <td>natavilla</td>
              <td>3167596261</td>
              <td>natavilla06@gmail.com</td>
              <td>No</td>
              <td>
                <Link to={`/edit-user/${3}`}>
                  <FontAwesomeIcon icon={faPen} className="pen-icon" />
                </Link>
                <FontAwesomeIcon
                  icon={faTrashCan}
                  className="trash-icon"
                  onClick={() => handleDelete(3)}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <Pagination />
      </div>
    </div>
  );
};

export default Users;
