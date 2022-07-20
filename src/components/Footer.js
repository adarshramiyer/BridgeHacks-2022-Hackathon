import React from "react";
import "./App.css";
import IMAGE from "./CiscoLogo.png";

const imageStyle = {
  paddingRight: 20,
  paddingTop: 20,
  paddingBottom: 20,
  marginBottom: 30,

}

const footerStyle = {
  fontSize: 50,
  marginTop: 30,
  marginBottom: 30,
}

function Footer() {
  return (
    <footer className="App-footer">
      <img
        style={imageStyle}
        className="White-logo"
        src={IMAGE}
        height={140}
        width={210}
      />
      <label style={footerStyle} className="App-footer">
        BridgeHacks 2022
      </label>
    </footer>
  );
}

export default Footer;