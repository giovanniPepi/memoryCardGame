import React, { useState } from "react";
import demon from "../img/Demon.webp";
const Header = () => {
  const [scoreInfo, setScore] = useState({
    score: 0,
    highestScore: 0,
    maximumPossibleScore: 0,
  });

  const { score, highestScore, maximumPossibleScore } = scoreInfo;

  return (
    <header>
      <div className="headerContainer">
        <img src={demon} alt="demon" />
        <h3>Memory Card Game</h3>
        <p>Score: {score}</p>
        <p>Highest score: {highestScore}</p>
        <p>Maxium possible score: {maximumPossibleScore}</p>
      </div>
    </header>
  );
};

export default Header;
