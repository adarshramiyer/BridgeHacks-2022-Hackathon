import React, { useEffect } from "react";
import { useParams } from "react-router";

function Game() {
  let { postSlug } = useParams();

  useEffect(() => {
    // Fetch post using the postSlug
  }, [postSlug]);

  return (
    <background className = "App-background">
    <div className="home">
      <div className="container">
        <h1 className="mt-5">This is Game JS</h1>
        <h6 className="mb-5">The slug is, {postSlug}</h6>
        <p>
          Area 1
        </p>
        <p>
          Area 2
        </p>
        <p>
          Area 3
        </p>
      </div>
    </div>
    </background>
  );
}

export default Game;