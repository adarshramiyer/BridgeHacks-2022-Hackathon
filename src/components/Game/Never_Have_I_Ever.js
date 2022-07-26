import React, { useEffect } from "react";
import { useParams } from "react-router";
import Image from "./game 3 screen.png";

function Game() {
  let { postSlug } = useParams();

  useEffect(() => {
    // Fetch post using the postSlug
  }, [postSlug]);

  return (
    <background className = "App-background-small-yellow">
    <div className="home">
      <div className="App-background-small-yellow">
        <img src={Image} width="1300" className="game-image"/>
      </div>
    </div>
    </background>
  );
}

export default Game;