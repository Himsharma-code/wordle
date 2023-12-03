import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes } from "src/routes";
import classes from "./PrivateLayout.module.scss";

const PrivateLayout = () => {
  return (
    <div className={classes.wrapper}>
      <nav>
        <h1>Wordle</h1>
      </nav>
      <Routes>
        {privateRoutes.map(({ path, component: Component }, i) => {
          return <Route key={i} path={path} element={<Component />} />;
        })}
        <Route path="/*" element={<Navigate to={"/wordle/play"} />} />
      </Routes>
    </div>
  );
};

export default PrivateLayout;
