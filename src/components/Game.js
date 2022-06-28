import React, { useState } from "react";
import CardContainer from "./CardContainer";
import Header from "./Header";

const Game = () => {
  const [score, setScore] = useState(0);
  const [highest, setHighest] = useState(0);
  const [cardsArray, setCardsArray] = useState([]);

  const handleScore = (point) => {
    setScore((prevScore) => {
      const score = prevScore + point;

      if (score > highest) {
        setHighest(score);
      }
      return score;
    });
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
      handleScore(1);
    } else {
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
