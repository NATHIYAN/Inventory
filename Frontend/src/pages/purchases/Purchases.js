import React from "react";
//import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faPen,
  faTrashCan,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import "./purchases.css";
import "../../styles/addbox.css";
import SearchBox from "../../components/search-box/SearchBox";
import Pagination from "../../components/pagination/Pagination";
import { Link } from "react-router-dom";

const Purchases = () => {
  const handleSearch = (query) => {
    console.log("Busqueda:", query);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete the Purchase?`
    );

    if (confirmDelete) {
      // Call to the api to delete the record by id, modify the state
      console.log(`Registro con ID ${id} eliminado`);
    }
  };

  return (
    <div className="purchases-container">
      <div className="text">Purchase</div>

      <div className="options">
        <SearchBox onSearch={handleSearch} />
        <Link to="/new-purchase" className="add-box">
          <FontAwesomeIcon icon={faPlus} className="icon" />
          <span classname="align"> &nbsp;New Purchase</span>
        </Link>
      </div>

      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PROVIDER</th>
              <th>USER</th>
              <th>DETAILES</th>
              <th>ACTIONES</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>27-05-2023</td>
              <td>$89.900</td>
              <td>Lenimp</td>
              <td>Felipe Villamizar</td>
              <td>
                <Link to={`/detail-purchase/${1}`}>
                  <FontAwesomeIcon
                    icon={faShoppingBag}
                    className="details-icon"
                  />
                </Link>
              </td>
              <td>
                <Link to={`/edit-purchase/${1}`}>
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
              <td>27-05-2023</td>
              <td>$24.900</td>
              <td>Propartes</td>
              <td>Felipe Villamizar</td>
              <td>
                <Link to={`/detail-purchase/${2}`}>
                  <FontAwesomeIcon
                    icon={faShoppingBag}
                    className="details-icon"
                  />
                </Link>
              </td>
              <td>
                <Link to={`/edit-purchase/${2}`}>
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
              <td>23-05-2023</td>
              <td>$132.900</td>
              <td>Esciclismo</td>
              <td>Felipe Villamizar</td>
              <td>
                <Link to={`/detail-purchase/${3}`}>
                  <FontAwesomeIcon
                    icon={faShoppingBag}
                    className="details-icon"
                  />
                </Link>
              </td>
              <td>
                <Link to={`/edit-purchase/${3}`}>
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

export default Purchases;
