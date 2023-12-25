import React, { useCallback, useEffect, useContext } from "react";
import { AppContext } from "../../App";
import classes from "./Keyboard.module.scss";
import BackspaceIcon from "@mui/icons-material/Backspace";
import Key from "../Key";

function Keyboard() {
  const keys1 = [
    { label: "Q", value: "Q" },
    { label: "W", value: "W" },
    { label: "E", value: "E" },
    { label: "R", value: "R" },
    { label: "T", value: "T" },
    { label: "Y", value: "Y" },
    { label: "U", value: "U" },
    { label: "I", value: "I" },
    { label: "O", value: "O" },
    { label: "P", value: "P" },
  ];

  const keys2 = [
    { label: "A", value: "A" },
    { label: "S", value: "S" },
    { label: "D", value: "D" },
    { label: "F", value: "F" },
    { label: "G", value: "G" },
    { label: "H", value: "H" },
    { label: "J", value: "J" },
    { label: "K", value: "K" },
    { label: "L", value: "L" },
  ];

  const keys3 = [
    { label: "Z", value: "Z" },
    { label: "X", value: "X" },
    { label: "C", value: "C" },
    { label: "V", value: "V" },
    { label: "B", value: "B" },
    { label: "N", value: "N" },
    { label: "M", value: "M" },
  ];

  const {
    disabledLetters,
    currAttempt,
    gameOver,
    onSelectLetter,
    onEnter,
    onDelete,
  } = useContext(AppContext);

  const handleKeyboard = useCallback(
    (event) => {
      if (gameOver.gameOver) return;
      if (event.key === "Enter") {
        onEnter();
      } else if (event.key === "Backspace") {
        onDelete();
      } else {
        keys1.forEach((key) => {
          if (event.key.toLowerCase() === key.value.toLowerCase()) {
            onSelectLetter(key.value);
          }
        });
        keys2.forEach((key) => {
          if (event.key.toLowerCase() === key.value.toLowerCase()) {
            onSelectLetter(key.value);
          }
        });
        keys3.forEach((key) => {
          if (event.key.toLowerCase() === key.value.toLowerCase()) {
            onSelectLetter(key.value);
          }
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currAttempt]
  );
  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <div className={classes.keyboard} onKeyDown={handleKeyboard}>
      <div className={classes.line1}>
        {keys1.map((key, i) => {
          return (
            <Key
              key={i}
              keyVal={key}
              disabled={disabledLetters.includes(key.value)}
            />
          );
        })}
      </div>
      <div className={classes.line2}>
        <div className={classes.spacer}></div>
        {keys2.map((key, i) => {
          return (
            <Key
              key={i}
              keyVal={key}
              disabled={disabledLetters.includes(key.value)}
            />
          );
        })}
        <div className={classes.spacer}></div>
      </div>
      <div className={classes.line3}>
        <Key keyVal={{ label: "ENTER", value: "ENTER" }} bigKey />
        {keys3.map((key, i) => {
          return (
            <Key
              key={i}
              keyVal={key}
              disabled={disabledLetters.includes(key.value)}
            />
          );
        })}
        <Key
          keyVal={{
            label: <BackspaceIcon fontSize="small" sx={{ px: 1 }} />,
            value: "BACK",
          }}
          bigKey
        />
      </div>
    </div>
  );
}

export default Keyboard;
