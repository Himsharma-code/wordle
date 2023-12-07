import React, { useContext } from "react";
import classes from "./Board.module.scss";
import Letter from "../Letter";
import { AppContext } from "src/App";
import cn from "classnames";
import { useEffect } from "react";
import { Snackbar } from "@mui/material";

function Board() {
  const { isInvalidWord, currAttempt, setIsInvalidWord } =
    useContext(AppContext);

  useEffect(() => {
    let timeout;
    if (isInvalidWord) {
      timeout = setTimeout(() => {
        setIsInvalidWord(false);
      }, 500);
    }

    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInvalidWord]);

  const rows = Array.from({ length: 6 }, (_, rowIndex) => {
    const letters = Array.from({ length: 5 }, (_, letterIndex) => (
      <Letter letterPos={letterIndex} attemptVal={rowIndex} key={letterIndex} />
    ));
    return (
      <div
        className={cn(classes.row, {
          [classes.invalid]: isInvalidWord && currAttempt.attempt === rowIndex,
        })}
        key={rowIndex}
      >
        {letters}
      </div>
    );
  });

  return (
    <>
      <Snackbar
        classes={{ root: classes.snackbar }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={isInvalidWord}
        onClose={() => {}}
        message="Not in word list"
      />
      <div className={classes.board}>{rows}</div>
    </>
  );
}

export default Board;
