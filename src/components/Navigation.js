import React from "react";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./App.css";
import IMAGE from "./Logo.jpg";

{
  var SAND = '#eab126';
  var BLACK = '#000000';
}

const navbarStyle = {
    backgroundColor: SAND,
    paddingTop: 15,
    paddingLeft: 25,
    paddingRight: 2,
    paddingBottom: 10,
    color: BLACK,
};

const navbarTitleStyle = {
    color: BLACK,
    textDecoration: 'none',
    fontWeight: 'bold',
    paddingLeft: 0,
    paddingBottom: 20,
    marginBottom: 20,

}

const imageStyle = {
  paddingRight: 0,
  paddingTop: 10,
  paddingBottom: 30,
}

const Navigation = (props) => {
  return (


    /*<div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            meso
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Calendar
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/chatbot">
                  Chatbot
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/game">
                  Game
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>*/


    <Navbar style={navbarStyle} className="header">
          <Navbar.Brand  href="/">
          <img
            style = {imageStyle}
            src = {IMAGE}
            height = {120}
            width = {150}
          />
          </Navbar.Brand>
          
          <NavLink className="logo-text" to="/">
            meso
          </NavLink>
          <div>
            <ul className="App-header-list">
              <li className="App-header-list">
                <NavLink className="header-links" to="/">
                  Calendar
                </NavLink>
              </li>
              <li className="App-header-list">
                <NavLink className="header-links" to="/about">
                  About
                </NavLink>
              </li>
              <li className="App-header-list">
                <NavLink className="header-links" to="/chatbot">
                  Chatbot
                </NavLink>
              </li>
              <li className="App-header-list">
                <NavLink className="header-links" to="/game">
                  Game
                </NavLink>
              </li>
            </ul>
          </div>
  </Navbar>
  );
};

export default Navigation;
