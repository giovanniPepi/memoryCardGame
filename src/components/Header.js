import React, { useState } from "react";
import demon from "../img/Demon.webp";
const Header = (props) => {
  const { score, highest, maximum } = props;

  return (
    <header>
      <div className="headerContainer">
        <img src={demon} alt="demon" />
        <h3>Memory Card Game</h3>
        <p className="score">
          Score
          <p>{score}</p>
        </p>
        <p className="score">
          Highest
          <p>{highest}</p>
        </p>
        <p className="score">
          Maximum possible
          <p>{maximum}</p>
        </p>
      </div>
    </header>
  );
};

export default Header;
