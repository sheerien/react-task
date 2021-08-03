import React, { Component } from "react";
import { FaSearch, FaShoppingCart, FaBars, FaArrowRight } from "react-icons/fa";

import "../main.css";
import "./Header.css";

import logo from "../../assets/images/logo-default-249x52.png";
class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <nav className="header">
            <div className="row">
              <div className="header-logo">
                <img src={logo} alt="logo" />
              </div>
              <ul className="header-list">
                <li className="header-list-item">
                  <a href="#">HOME</a>
                </li>
                <li className="header-list-item">
                  <a href="#">PAGES</a>
                </li>
                <li className="header-list-item">
                  <a href="#">BLOG</a>
                </li>
                <li className="header-list-item">
                  <a href="#">GALLERY</a>
                </li>
                <li className="header-list-item">
                  <a href="#">GALLERY</a>
                </li>
                <li className="header-list-item">
                  <a href="#">ELEMENTS</a>
                </li>
                <li className="header-list-item">
                  <a href="#">SHOP</a>
                </li>
              </ul>
              <div className="header-icon">
                <i>
                  <FaSearch />
                </i>
                <i>
                  <FaShoppingCart />
                </i>
                <i>
                  <FaBars />
                </i>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
