import { boardDefault, generateWordSet } from "./Words";
import React, { useState, createContext, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PrivateLayout from "./layouts/PrivateLayout";
import AuthLayout from "./layouts/AuthLayout";
import PublicLayout from "./layouts/PublicLayout";
import { AuthProvider } from "./context/AuthContext";

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letter: 0 });
  const [wordSet, setWordSet] = useState(new Set());
  const [correctWord, setCorrectWord] = useState("ocean");
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });
  const [isInvalidWord, setIsInvalidWord] = useState(false);
  console.log("correctWord", correctWord);

  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord);
    });
  }, []);

  const onEnter = () => {
    setIsInvalidWord(false);
    if (currAttempt.letter !== 5) return;

    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[currAttempt.attempt][i];
    }
    if (wordSet.has(currWord.toLowerCase())) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letter: 0 });
    } else {
      setIsInvalidWord(true);
    }
    if (currWord.toLocaleLowerCase() === correctWord.toLocaleLowerCase()) {
      setGameOver({ gameOver: true, guessedWord: true });
      return;
    }

    if (currAttempt.attempt === 5) {
      setGameOver({ gameOver: true, guessedWord: false });
      return;
    }
  };

  const onDelete = () => {
    if (currAttempt.letter === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letter - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letter: currAttempt.letter - 1 });
  };

  const onSelectLetter = (key) => {
    if (currAttempt.letter > 4) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letter] = key;
    setBoard(newBoard);
    setCurrAttempt({
      attempt: currAttempt.attempt,
      letter: currAttempt.letter + 1,
    });
  };

  return (
    <div className="App">
      <AuthProvider>
        <AppContext.Provider
          value={{
            board,
            setBoard,
            currAttempt,
            setCurrAttempt,
            correctWord,
            onSelectLetter,
            onDelete,
            onEnter,
            setDisabledLetters,
            disabledLetters,
            gameOver,
            isInvalidWord,
            setIsInvalidWord,
          }}
        >
          <Routes>
            <Route path="/wordle/*" element={<PrivateLayout />} />
            <Route path="/auth/*" element={<AuthLayout />} />
            <Route path="/home/*" element={<PublicLayout />} />
            <Route path="/*" element={<Navigate to={"/home/welcome"} />} />
          </Routes>
        </AppContext.Provider>
      </AuthProvider>
    </div>
  );
}

export default App;
