import React, { useState, useEffect } from "react";
import CardContainer from "./CardContainer";
import Header from "./Header";
import Instructions from "./Instructions";

const Game = () => {
  const [score, setScore] = useState(0);
  const [highest, setHighest] = useState(0);
  const [cardsArray, setCardsArray] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [highestToggle, setHighestToggle] = useState(false);
  const [highestAnimation, setHighestAnimation] = useState(0);
  const [animation, setAnimation] = useState(0);

  const handleScore = (point) => {
    setScore((prevScore) => {
      const score = prevScore + point;
      setToggle(!toggle);

      if (score > highest) {
        setHighest(score);
        setHighestToggle(!highestToggle);
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

  const renderAnimations = () => {
    return toggle ? setAnimation(1) : setAnimation(0);
  };
  const renderHighestAnimation = () => {
    return highestToggle ? setHighestAnimation(1) : setHighestAnimation(0);
  };

  useEffect(() => {
    renderAnimations();
    renderHighestAnimation();
  }, [toggle, highestToggle]);

  return (
    <main>
      <Header
        score={score}
        highest={highest}
        maximum={30}
        animation={animation}
        highestAnimation={highestAnimation}
      />
      <Instructions />
      <CardContainer
        score={score}
        highest={highest}
        gameLogic={gameLogic}
        animation={animation}
      />
    </main>
  );
};

export default Game;
