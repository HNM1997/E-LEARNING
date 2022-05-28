import React, { Component } from "react";
import {NavLink} from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to='/'>
          Navbar
        </NavLink>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <NavLink to='/home' className="nav-link" href="#">
                Trang Chủ <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            
          </ul>
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <NavLink to='/signup' className="nav-link" href="#">
                đăng ký 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/register' className="nav-link" href="#">
                đăng nhập
              </NavLink>
            </li>
            
          </ul>
         
        </div>
      </nav>
    );
  }
}
