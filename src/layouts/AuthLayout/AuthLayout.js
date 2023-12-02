import React from "react";
import { Route, Routes } from "react-router-dom";
import { authRoutes } from "src/routes";
import classes from "./AuthLayout.module.scss";

const AuthLayout = () => {
  return (
    <div className={classes.wrapper}>
      <nav>
        <h1>Wordle</h1>
      </nav>
      <Routes>
        {authRoutes.map(({ path, component: Component }) => {
          return <Route path={path} element={<Component />} />;
        })}
      </Routes>
    </div>
  );
};

export default AuthLayout;
