import React, { useContext, useEffect } from "react";
import { AppContext } from "../../App";
import classes from "./Letter.module.scss";

function Letter({ letterPos, attemptVal }) {
  const { board, setDisabledLetters, currAttempt, correctWord } =
    useContext(AppContext);
  const letter = board[attemptVal][letterPos];
  const correct = correctWord.toUpperCase()[letterPos] === letter;
  const almost =
    !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
  const letterState =
    currAttempt.attempt > attemptVal &&
    (correct ? "correct" : almost ? "almost" : "error");
  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      console.log(letter);
      setDisabledLetters((prev) => [...prev, letter]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currAttempt.attempt]);
  return (
    <div className={classes.letter} id={letterState || ""}>
      {letter}
    </div>
  );
}

export default Letter;
