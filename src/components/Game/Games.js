import React from "react";
import { Link } from "react-router-dom";
import ticTacToeImage from "./game 1.png";
import wouldYouImage from "./game 2.png";
import neverImage from "./game 3.png";
import TwoImage from "./game 4.png";

const imageStyle = {
  paddingLeft: "100",
  margin: "50px",
}

function Games() {
  return (
    <div className="">
      <div className="game-screen">
        <table border="0">
          <tr>
            <td>
              <Link to="/game/tic-tac-toe">
                <div className="" style={imageStyle}>
                  <div className="">
                    <img src={ticTacToeImage} width="500" className="game-image"/>
                  </div>
                </div>
              </Link>
            </td>
            <td>
              <Link to="/game/would-you-rather">
                <div className="">
                  <div className="">
                    <img src={wouldYouImage} width="500" style={imageStyle} className="game-image" />
                  </div>
                </div>
              </Link>
            </td>
            <td>
              <Link to="/game/never-have-i-ever">
                <div className="">
                  <div className="">
                    <img src={neverImage} width="500" style={imageStyle} className="game-image" />
                  </div>
                </div>
              </Link>
            </td>
            <td>
              <Link to="/game/two-truths-and-a-lie">
                <div className="" style={imageStyle}>
                  <div className="">
                    <img src={TwoImage} width="500" className="game-image"/>
                  </div>
                </div>
              </Link>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Games;
