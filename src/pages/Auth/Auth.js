import React from "react";
import classes from "./Auth.module.scss";
import { TextField, Button, Grid } from "@mui/material";

const Auth = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };
  return (
    <div className={classes.authWrapper}>
      <div> Log in or create an account</div>
      <div className={classes.loginWithEmail}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Username or Email"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
      <div className={classes.loginWithGoogle}> </div>
    </div>
  );
};

export default Auth;
