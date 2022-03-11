import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "../Login/Login";
import Sign from "../Sign/Sign";
const Navbar = () => {
  const state = useSelector((state) => state.handelCart);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 shadow-sm ">
      <div className="container">
        <NavLink className="navbar-brand fs-4 fw-bold" to="/">
          LA COLLECTION
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fs-5">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="buttons">
            <Login />
            <Sign />
            <NavLink
              className="btn btn-light ms-2 fs-5 position-relative"
              to="/cart"
            >
              <i className="fa fa-shopping-cart me-1" to="#"></i>Cart
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {state.length}
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
