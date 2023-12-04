import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { authRoutes } from "src/routes";
import classes from "./AuthLayout.module.scss";
import { useAuth } from "src/context/AuthContext";

const AuthLayout = () => {
  const sas = useAuth();
  console.log("sas", sas);
  return (
    <div className={classes.wrapper}>
      <Routes>
        {authRoutes.map(({ path, component: Component }, i) => {
          return <Route key={i} path={path} element={<Component />} />;
        })}
        <Route path="/*" element={<Navigate to={"/auth/login"} />} />
      </Routes>
    </div>
  );
};

export default AuthLayout;
