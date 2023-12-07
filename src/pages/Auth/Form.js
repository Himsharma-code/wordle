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

const Form = ({ handleSubmit, error, setError, submitText = "login" }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setError("");
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };
  return (
    <div className={classes.loginWithEmail}>
      <form
        onSubmit={async (e) => {
          setLoading(true);
          await handleSubmit(e, credentials);
          setCredentials({
            email: "",
            password: "",
          });
          setLoading(false);
        }}
      >
        <FormControl error={error} variant="standard">
          <Grid container rowSpacing={1}>
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
                sx={{ textTransform: "capitalize" }}
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={loading}
                size="large"
              >
                {submitText} {loading && <CircularProgress color="inherit" />}
              </Button>
            </Grid>
          </Grid>
        </FormControl>
      </form>
    </div>
  );
};

export default Form;
