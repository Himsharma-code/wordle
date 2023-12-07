import React, { useContext, useEffect, useMemo } from "react";
import { AppContext } from "../../App";
import classes from "./Letter.module.scss";
import cn from "classnames";

function Letter({ letterPos, attemptVal }) {
  const { board, setDisabledLetters, currAttempt, correctWord } =
    useContext(AppContext);

  const letter = useMemo(
    () => board[attemptVal][letterPos],
    [board, attemptVal, letterPos]
  );

  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      setDisabledLetters((prev) => [...prev, letter]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currAttempt.attempt]);

  const correct = useMemo(
    () => correctWord.toUpperCase()[letterPos] === letter,
    [correctWord, letterPos, letter]
  );

  const almost = useMemo(
    () =>
      !correct && letter !== "" && correctWord.toUpperCase().includes(letter),
    [correct, letter, correctWord]
  );

  const letterState = useMemo(() => {
    if (
      currAttempt.attempt > attemptVal &&
      (correct ? "correct" : almost ? "almost" : "error")
    ) {
      return correct ? "correct" : almost ? "almost" : "error";
    }
    return "";
  }, [currAttempt.attempt, attemptVal, correct, almost]);

  const pop = useMemo(() => {
    return (
      currAttempt.letter === letterPos && currAttempt.attempt === attemptVal
    );
  }, [currAttempt.letter, currAttempt.attempt, letterPos, attemptVal]);

  return (
    <div
      className={cn(classes.letter, { [classes.pop]: pop })}
      id={letterState}
    >
      {letter}
    </div>
  );
}

export default Letter;
