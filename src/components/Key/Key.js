import React, { useContext } from "react";
import { AppContext } from "../../App";
import classes from "./Key.module.scss";
import cn from "classnames";

function Key({ keyVal, bigKey, disabled }) {
  const { value = "", label = "" } = keyVal;
  const { gameOver, onSelectLetter, onDelete, onEnter } =
    useContext(AppContext);

  const selectLetter = () => {
    if (gameOver.gameOver) return;
    if (value === "ENTER") {
      onEnter();
    } else if (value === "BACK") {
      onDelete();
    } else {
      onSelectLetter(value);
    }
  };
  return (
    <div
      className={cn(classes.key, {
        [classes.enter]: value === "ENTER" || value === "BACK",
      })}
      id={bigKey ? "big" : disabled && "disabled"}
      onClick={selectLetter}
    >
      {label}
    </div>
  );
}

export default Key;
