import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  DIVERSITY,
  HOME,
  LOGIN,
  OPEN_SPEAKERS,
  PARTICIPANTS,
  RESULTS,
  SIGN_UP,
  SPEAKER_TAB,
  TEAM_TAB,
} from "./routes";
import Home from "../pages/Home/Home";
import Navbar from "../components/Navbar/Navbar";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={LOGIN} element={<div>Login</div>} />
        <Route path={SIGN_UP} element={<div>Sign up</div>} />
        <Route path={TEAM_TAB} element={<div>team tab</div>} />
        <Route path={SPEAKER_TAB} element={<div>speaker tab</div>} />
        <Route path={OPEN_SPEAKERS} element={<div>open speaker</div>} />
        <Route path={RESULTS} element={<div>results</div>} />
        <Route path={DIVERSITY} element={<div>diversity</div>} />
        <Route path={PARTICIPANTS} element={<div>participants</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
