import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-4 py-0">
        <a className="navbar-brand" href="/">
          Contact Manager
        </a>
        <div>
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item  ">
              <Link className="nav-link" to="/">
                <i className="fas fa-home" />
                Home
              </Link>
            </li>
            <li className="nav-item  ">
              <Link className="nav-link" to="/contact/add">
                <i className="fas fa-plus" />
                Add Contact
              </Link>
            </li>
            <li className="nav-item  ">
              <Link className="nav-link" to="/about">
                <i className="fas fa-question" />
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
