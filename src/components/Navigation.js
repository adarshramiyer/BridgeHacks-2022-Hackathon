import React from "react";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./App.css";
import IMAGE from "./Logo2.jpg";
import PFP from "./number_21.jpg";

{
  var SAND = "#eab126";
  var BLACK = "#000000";
}

const navbarStyle = {
  backgroundColor: SAND,
  paddingTop: 15,
  paddingLeft: 25,
  paddingRight: 0,
  paddingBottom: 10,
  color: BLACK,
};

const navbarTitleStyle = {
  color: BLACK,
  textDecoration: "none",
  fontWeight: "bold",
  paddingLeft: 0,
  paddingBottom: 20,
  marginBottom: 20,
};

const imageStyle = {
  paddingRight: 0,
  paddingTop: 10,
  paddingBottom: 10,
};
const imageStyle2 = {
  paddingRight: 0,
  paddingLeft: 10,
  paddingTop: 10,
  paddingBottom: 10,
};

const Navigation = (props) => {
  return (
    <Navbar style={navbarStyle} className="header">
      <Navbar.Brand href="/">
        <img style={imageStyle} src={IMAGE} height={80} width={100} />
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
            <NavLink className="header-links" to="/chatbot">
              Employee Resources
            </NavLink>
          </li>
          <li className="App-header-list">
            <NavLink className="header-links" to="/game">
              Game
            </NavLink>
          </li>
          <li className="App-header-list">
            <NavLink className="header-links" to="/about">
              About
            </NavLink>
          </li>
          <li className="App-header-account">
            <NavLink className="header-account" to="/">
              <label>Account</label>
            </NavLink>
          </li>
          <img style={imageStyle2} src={PFP} height={80} width={80} />
        </ul>
      </div>
    </Navbar>
  );
};

export default Navigation;
