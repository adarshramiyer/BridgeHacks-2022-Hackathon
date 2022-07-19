import React from "react";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./App.css";
//import IMAGE from "./CiscoLogo.png";

{
  var SAND = '#eab126';
  var BLACK = '#000000';
}

const navbarStyle = {
    backgroundColor: SAND,
    paddingTop: 15,
    paddingLeft: 25,
    paddingRight: 2,
    paddingBottom: 30,
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
  paddingRight: 40,
  paddingTop: 10,
}

const Navigation = (props) => {
  return (
    <div className="navigation">
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
    </div>
  );
};

export default Navigation;
