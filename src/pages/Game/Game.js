import React, { useContext, useState } from "react";
import ReactModal from "react-modal";
import { AppContext } from "src/App";
import Board from "src/components/Board";
import GameInfo from "src/components/GameInfo";
import GameOver from "src/components/GameOver";
import Keyboard from "src/components/Keyboard";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#121213",
    color: "white",
    border: "1px solid #1a1a1b",
    maxWidth: "450px",
  },
};

const Game = () => {
  const [infoModal, setInfoModal] = useState(true);
  const { gameOver } = useContext(AppContext);

  return (
    <div>
      <div className="game">
        <div className="boardContainer">
          {" "}
          <Board />
        </div>
        {gameOver.gameOver ? <GameOver /> : <Keyboard />}
      </div>
      <ReactModal
        onAfterClose={() => {
          <div>close</div>;
        }}
        overlayClassName={"modalOverlay"}
        isOpen={infoModal}
        style={customStyles}
        onRequestClose={() => {
          setInfoModal(false);
        }}
      >
        <div style={{ position: "relative" }}>
          <div onClick={() => setInfoModal(false)} className="close">
            x
          </div>
          <GameInfo />
        </div>
      </ReactModal>
    </div>
  );
};

export default Game;
