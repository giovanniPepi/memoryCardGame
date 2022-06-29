import { useState } from "react";

const Instructions = () => {
  const [cssVariable, setCssVariable] = useState({
    display: "flex",
  });

  return (
    <section className="instructionsContainer" style={cssVariable}>
      <div className="instructions">
        To score points, pick a card - but choose it well! Picking up different
        cards will yield points; picking a card you have already chosen, and you
        lose!
        <button
          className="instructionsBtn"
          onClick={() => {
            setCssVariable({
              display: "none",
            });
          }}
        >
          Ok!
        </button>
      </div>
    </section>
  );
};
export default Instructions;
