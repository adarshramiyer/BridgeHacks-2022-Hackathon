import React from "react";
import { Link } from "react-router-dom";

function Games() {
  return (
    <div className="home">
      <div className="container">
        <Link to="/game/games-js">
          <div className="row align-items-center my-5">
            <div className="col-lg-5">
              <h1 className="font-weight-light">Game Page</h1>
              <p>
                This is the Game Page
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Games;