import React, { useEffect, useState } from "react";
import demon from "../img/Demon.webp";
const Header = (props) => {
  const { score, highest, maximum, animation, highestAnimation } = props;

  return (
    <header>
      <div className="headerContainer">
        <img src={demon} alt="demon" />
        <h3>Memory Card Game</h3>
        <p className={"score"}>
          Score
          <p className={"placar"} animation={animation}>
            {score}
          </p>
        </p>
        <p className="score">
          Highest
          <p className="placar" animation={highestAnimation}>
            {highest}
          </p>
        </p>
        <p className="score">
          Limit
          <p className="placar">{maximum}</p>
        </p>
      </div>
    </header>
  );
};

export default Header;
