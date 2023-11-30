import React, { useContext } from "react";
import { AppContext } from "../../App";
import classes from "./Key.module.scss";
import cn from "classnames";

function Key({ keyVal, bigKey, disabled }) {
  const { gameOver, onSelectLetter, onDelete, onEnter } =
    useContext(AppContext);

  const selectLetter = () => {
    if (gameOver.gameOver) return;
    if (keyVal === "ENTER") {
      onEnter();
    } else if (keyVal === "DELETE") {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };
  return (
    <div
      className={cn(classes.key, {
        [classes.enter]: keyVal === "ENTER" || keyVal === "DELETE",
      })}
      id={bigKey ? "big" : disabled && "disabled"}
      onClick={selectLetter}
    >
      {keyVal}
    </div>
  );
}

export default Key;
