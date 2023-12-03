import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { publicRoutes } from "src/routes";
import classes from "./PublicLayout.module.scss";

const PublicLayout = () => {
  return (
    <div className={classes.wrapper}>
      <Routes>
        {publicRoutes.map(({ path, component: Component }, i) => {
          return <Route key={i} path={path} element={<Component />} />;
        })}
        <Route path="/*" element={<Navigate to={"/home/welcome"} />} />
      </Routes>
    </div>
  );
};

export default PublicLayout;
