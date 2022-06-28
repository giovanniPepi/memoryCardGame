import React, { useState } from "react";
import CardContainer from "./CardContainer";
import Header from "./Header";

const Game = () => {
  const [score, setScore] = useState(0);
  const [highest, setHighest] = useState(0);
  const [cardsArray, setCardsArray] = useState(0);

  const handleScore = () => {
    setScore((prevScore) => prevScore + 1);
  };

  const handleHighest = () => {
    setHighest((prevScore) => prevScore + 1);
  };

  const handleCard = (card) => {
    setCardsArray((prevArray) => [...prevArray, card]);
  };

  const reset = () => {
    setScore(0);
    setCardsArray([]);
  };

  const gameLogic = (card) => {
    if (!cardsArray.includes(card)) {
      handleCard(card);
      handleScore();
    } else {
      handleHighest();
      reset();
    }
  };

  return (
    <main>
      <Header score={score} highest={highest} maximum={30} />
      <CardContainer score={score} highest={highest} gameLogic={gameLogic} />
    </main>
  );
};

export default Game;
