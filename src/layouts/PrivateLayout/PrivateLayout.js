import React from "react";
import { Route, Routes } from "react-router-dom";
import { privateRoutes } from "src/routes";

const PrivateLayout = () => {
  console.log("privateRoutes", privateRoutes);
  return (
    <div>
      <nav>
        <h1>Wordle</h1>
      </nav>
      <Routes>
        {privateRoutes.map(({ path, component: Component }) => {
          console.log("path", path);
          return <Route path={path} element={<Component />} />;
        })}
      </Routes>
    </div>
  );
};

export default PrivateLayout;
