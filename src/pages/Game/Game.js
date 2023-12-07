import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "src/App";
import Board from "src/components/Board";
import GameInfo from "src/components/GameInfo";
import GameOver from "src/components/GameOver";
import Keyboard from "src/components/Keyboard";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Dialog } from "@mui/material";
import classes from "./Game.module.scss";

const style = {
  background: "rgb(18, 18, 19)",
  color: "#fff",
  p: 4,
  maxWidth: 500,
};

const Game = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const infoModalState = searchParams.get("infoModal");

  const [infoModal, setInfoModal] = useState(!!infoModalState);
  const { gameOver } = useContext(AppContext);

  const handleClose = () => {
    setInfoModal(false);
    navigate(".", { replace: true });
  };

  return (
    <div>
      <div className="game">
        <div className="boardContainer">
          {" "}
          <Board />
        </div>
        {gameOver.gameOver ? <GameOver /> : <Keyboard />}
      </div>
      <Dialog
        classes={{ paper: classes.paper }}
        open={infoModal}
        onClose={handleClose}
      >
        <Box sx={{ ...style }}>
          <CloseIcon onClick={handleClose} className={classes.close} />
          <GameInfo />
        </Box>
      </Dialog>
    </div>
  );
};

export default Game;
