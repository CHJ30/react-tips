import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ReactMemo from "./page/ReactMemo/ReactMemo";

import { Router, Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
const routes = {
  path: "/",
  component: App,
  childRoutes: [{ path: "about", component: ReactMemo }],
};
root.render(
  <div>
    <BrowserRouter>
      <div>
        <Link to={"/"}> child1 </Link>
        <Link to={"/reactMemo"}> reactMemo </Link>
      </div>
      <Routes>
        <Route element={<App />} path="/"></Route>
        <Route element={<ReactMemo />} path="ReactMemo"></Route>
      </Routes>
    </BrowserRouter>
  </div>
);
