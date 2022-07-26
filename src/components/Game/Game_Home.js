import React from "react";
import { Outlet } from "react-router-dom";

function Game_Home() {
  return (
    <background className = "App-background-small-gradient">
    <div className="">
      <div className="">
        <h1 className="Game-title">Team bonding activities</h1>
        <Outlet />
      </div>
    </div>
    </background>
  );
}

export default Game_Home;