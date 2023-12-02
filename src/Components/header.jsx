/** @format */

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../StyleSheets/header.css";
import logo from "../Images/applogo.png";
import carticon from "../Images/cartIcon.png";



class Header extends Component {
  render() {
    return (
      <div id='hederCnt'>
        <nav class="navbar navbar-expand-lg navbar-light bg-light ">
            
        <a class="navbar-brand" href="#">
            <img src={logo} width="60" height="60" class="d-inline align-top" alt=""/>
        </a>
        <span id="brandName">ShopEasy!</span>

        
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav" id="headerModules">
                <a class="nav-item nav-link active" href="#">Home </a>
                <a class="nav-item nav-link active" href="#">Products </a>
            </div>
        </div>

        <div className="ml-auto" >
        <button className="btn" id="cartbtn">
          <img
            src={carticon}
            width="30"
            height="30"
            className="d-inline align-top"
            alt=""
          />
          
          Cart <span className="badge badge-danger ml-1 .text-dark" id="cartCnt">0</span>
        </button>
      </div>

        
        </nav>
      </div>
    );
  }
}

export default Header;
