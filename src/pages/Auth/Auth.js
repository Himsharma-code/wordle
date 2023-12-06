import React, { useState } from "react";
import classes from "./Auth.module.scss";
import {
  TextField,
  Button,
  Grid,
  CircularProgress,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { useAuthActions } from "src/hooks/auth/useLogin";
import { useAuth } from "src/context/AuthContext";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const { register } = useAuthActions();
  const navigate = useNavigate();
  const {
    data: { user },
  } = useAuth();

  const { loading = false } = user;
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Use 'credentials' state to perform login logic
    const { status, data } = await register(credentials);
    if (status) {
      navigate("/wordle/play?infoModal=true");
    } else {
      console.log("data", data);
      setError(data?.response?.data?.error || "");
      setCredentials({ email: "", password: "" });
    }
    // Reset the form after submission
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setError("");
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  return (
    <div className={classes.authWrapper}>
      <div> Log in or create an account</div>
      <div className={classes.loginWithEmail}>
        <form onSubmit={handleSubmit}>
          <FormControl error={error} variant="standard">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  required
                  name="email"
                  value={credentials.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  required
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormHelperText>{error}</FormHelperText>
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  disabled={loading}
                  size="large"
                >
                  Login {loading && <CircularProgress color="inherit" />}
                </Button>
              </Grid>
            </Grid>
          </FormControl>
        </form>
      </div>
      <div className={classes.loginWithGoogle}> </div>
    </div>
  );
};

export default Auth;
