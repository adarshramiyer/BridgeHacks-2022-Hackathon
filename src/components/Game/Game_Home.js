import React from "react";
import { Outlet } from "react-router-dom";

function Game_Home() {
  return (
    <background className = "App-background-small">
    <div className="home">
      <div className="container">
        <h1 className="text-center mt-5">Game home page</h1>
        <Outlet />
      </div>
    </div>
    </background>
  );
}

export default Game_Home;