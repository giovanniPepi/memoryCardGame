import React, { useState } from "react";
import CardContainer from "./CardContainer";
import Header from "./Header";

const Game = () => {
  const [scoreInfo, setScore] = useState({
    score: 0,
    highestScore: 0,
    maximumPossibleScore: 0,
  });

  const { score, highestScore, maximumPossibleScore } = scoreInfo;

  return (
    <main>
      <Header score={score} highest={highestScore} max={maximumPossibleScore} />
      <CardContainer />
    </main>
  );
};

export default Game;
