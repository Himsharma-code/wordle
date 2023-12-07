import React, { useState } from "react";
import classes from "./Auth.module.scss";
import { useAuthActions } from "src/hooks/auth/useLogin";
import { useNavigate } from "react-router-dom";
import Form from "./Form";
import { Box, Button } from "@mui/material";

const Auth = () => {
  const { register, login } = useAuthActions();
  const navigate = useNavigate();

  const [authState, setAuthState] = useState("login"); //'register

  const [error, setError] = useState("");
  const authAction = authState === "login" ? login : register;
  const handleSubmit = async (e, credentials) => {
    e.preventDefault();
    // Use 'credentials' state to perform login logic
    const { status, data } = await authAction(credentials);
    if (status) {
      navigate("/wordle/play?infoModal=true");
    } else {
      setError(
        data?.response?.data?.error || data?.response?.data?.message || ""
      );
    }
    // Reset the form after submission
  };

  return (
    <div className={classes.authWrapper}>
      <div> {authState}</div>
      <Form
        error={error}
        setError={setError}
        submitText={authState}
        handleSubmit={handleSubmit}
      />
      <Box sx={{ textAlign: "center", color: "black", p: 3 }}>or</Box>
      <Button
        sx={{ textTransform: "capitalize", maxWidth: "300px" }}
        type="submit"
        variant="outlined"
        color="primary"
        fullWidth
        onClick={() => {
          setAuthState(authState === "login" ? "register" : "login");
        }}
        size="large"
      >
        {authState === "login" ? "register" : "login"}
      </Button>
      <div className={classes.loginWithGoogle}></div>
    </div>
  );
};

export default Auth;
