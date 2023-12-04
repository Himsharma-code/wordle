import React, { useState } from "react";
import classes from "./Auth.module.scss";
import { TextField, Button, Grid } from "@mui/material";
import { useAuthActions } from "src/hooks/auth/useLogin";

const Auth = () => {
  const { register } = useAuthActions();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Use 'credentials' state to perform login logic
    register(credentials);
    // Reset the form after submission
    setCredentials({ email: "", password: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
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
