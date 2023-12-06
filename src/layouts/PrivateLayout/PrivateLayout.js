import React, { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { privateRoutes } from "src/routes";
import classes from "./PrivateLayout.module.scss";
import { isLoggedIn } from "src/utils/auth";

const PrivateLayout = () => {
  // const navigate = useNavigate();
  const isLogin = isLoggedIn();

  useEffect(() => {
    // !isLogin && navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogin]);

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
