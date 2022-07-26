import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation1,
  Footer,
  Calendar,
  About,
  Chatbot,
  Game_Home,
  Games,
  TicTacToe,
  NeverHaveIEver,
  WouldYouRather
} from "./components";


ReactDOM.render(
  <Router>
    <Navigation1 />
    <Routes>
      <Route path="/" element={<Calendar />} />
      <Route path="/about" element={<About />} />
      <Route path="/chatbot" element={<Chatbot />} />
      <Route path="/game" element={<Game_Home />}>
        <Route path="" element={<Games />} />
          <Route path="/game/tic-tac-toe" element={<TicTacToe />} />
          <Route path="/game/would-you-rather" element={<WouldYouRather />} />
          <Route path="/game/never-have-i-ever" element={<NeverHaveIEver />} />
      </Route>
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();