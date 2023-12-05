import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../StyleSheets/header.css";
import logo from "../Images/applogo.png";
import carticon from "../Images/cartIcon.png";

const Header = ({ cart }) => {
  const getTotalCartQuantity = (cart) => {
    return cart.reduce((netQnt, item) => netQnt + parseInt(item.quantity), 0);
  };

  return (
    <div id="hederCnt">
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <a className="navbar-brand" href="#">
          <img src={logo} width="60" height="60" className="d-inline align-top" alt="" />
        </a>
        <span id="brandName">ShopEasy!</span>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav" id="headerModules">
            <a className="nav-item nav-link active" href="#">
              Home
            </a>
            <a className="nav-item nav-link active" href="#">
              Products
            </a>
          </div>
        </div>

        <div className="ml-auto">
          <button className="btn" id="cartbtn">
            <img
              src={carticon}
              width="30"
              height="30"
              className="d-inline align-top"
              alt=""
            />
            Cart{" "}
            <span className="badge badge-danger ml-1 .text-dark" id="cartCnt">
              {getTotalCartQuantity(cart) || 0}
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
