import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HOME } from "./routes";
import Home from "../pages/Home/Home";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
