import React, { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { authRoutes } from "src/routes";
import classes from "./AuthLayout.module.scss";
import { isLoggedIn } from "src/utils/auth";

const AuthLayout = () => {
  const navigate = useNavigate();
  const isLogin = isLoggedIn();

  useEffect(() => {
    if (isLogin) navigate("/wordle/play?infoModal=true");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogin]);

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
