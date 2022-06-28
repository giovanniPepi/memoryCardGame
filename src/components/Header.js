import React, { useState } from "react";
import demon from "../img/Demon.webp";
const Header = (props) => {
  const { score, highest, maximum } = props;

  return (
    <header>
      <div className="headerContainer">
        <img src={demon} alt="demon" />
        <h3>Memory Card Game</h3>
        <p>Score: {score}</p>
        <p>Highest score: {highest}</p>
        <p>Maximum possible score: {maximum}</p>
      </div>
    </header>
  );
};

export default Header;
