import React from "react";
import classes from "./Home.module.scss";
import Logo from "src/assets/wordle.jpeg";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const date = new Date();

const options = { year: "numeric", month: "long", day: "numeric" };
const formattedDate = date.toLocaleString("en-US", options);

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.home}>
      <div className={classes.contentWelcomeMain}>
        <div role="img" aria-label="wordle grid icon" className={classes.icon}>
          <img src={Logo} alt="logo" />
        </div>
        <h1 className="title__uhLqe">Wordle</h1>
        <h2 className="subtitle__rL8EE">
          Get 6 chances to guess a <span className="noWrap">5-letter</span>{" "}
          word.
        </h2>
        <div className={classes.buttonContainer}>
          <Button
            variant="outlined"
            size="large"
            color="inherit"
            style={{ borderRadius: 30 }}
            onClick={() => {
              navigate("/auth/login");
            }}
          >
            Log in
          </Button>
          <Button
            variant="contained"
            size="large"
            color="success"
            style={{ borderRadius: 30 }}
            onClick={() => {
              navigate("/wordle/play?infoModal=true");
            }}
          >
            Play
          </Button>
        </div>
        <div className={classes.dateContainer}>
          <h3 className="date__Fmbmx">{formattedDate}</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
