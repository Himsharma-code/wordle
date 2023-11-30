import React from "react";
import classes from "./GameInfo.module.scss";

const EXAMPLES = [
  {
    word: "APPLE",
    description: "A is in the word and in the correct spot.",
    words: [
      { color: "#538d4e", letter: "A" },
      { color: "inherit", letter: "P" },
      { color: "inherit", letter: "P" },
      { color: "inherit", letter: "L" },
      { color: "inherit", letter: "E" },
    ],
  },
  {
    word: "PILLS",
    description: "I is in the word but in the wrong spot.",
    words: [
      { color: "inherit", letter: "P" },
      { color: "#b59f3b", letter: "I" },
      { color: "inherit", letter: "L" },
      { color: "inherit", letter: "L" },
      { color: "inherit", letter: "S" },
    ],
  },
  {
    word: "VAGUE",
    description: "U is not in the word in any spot.",
    words: [
      { color: "inherit", letter: "V" },
      { color: "inherit", letter: "A" },
      { color: "inherit", letter: "G" },
      { color: "#3a3a3c", letter: "U" },
      { color: "inherit", letter: "E" },
    ],
  },
];

const GameInfo = () => {
  return (
    <div className={classes.wrapper}>
      <h2 className="">How To Play</h2>

      <h3 className="">Guess the Wordle in 6 tries.</h3>
      <section className="">
        <ul className="">
          <li>Each guess must be a valid 5-letter word.</li>
          <li>
            The color of the tiles will change to show how close your guess was
            to the word.
          </li>
        </ul>
        <div className={classes.examples}>
          {EXAMPLES.map((example, index) => {
            return (
              <div key={index}>
                <div className={classes.example}>
                  {example.words.map((word, index) => {
                    return (
                      <div
                        key={index}
                        className={classes.word}
                        style={{ backgroundColor: word.color }}
                      >
                        {word.letter}
                      </div>
                    );
                  })}
                  <p>{example.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default GameInfo;
