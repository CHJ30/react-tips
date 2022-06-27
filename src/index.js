import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ReactMemo from "./page/ReactMemo/ReactMemo";
import UseMemo from "./page/useMemo/UseMemo";
import UseCallback from "./page/useCallback/UseCallback";

import { Router, Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <BrowserRouter>
      <div>
        <Link to={"/"}> child1 </Link>
        <Link to={"/reactMemo"}> reactMemo </Link>
        <Link to={"/UseMemo"}> UseMemo </Link>
        <Link to={"/UseCallback"}> UseCallback </Link>
      </div>
      <Routes>
        <Route element={<App />} path="/"></Route>
        <Route element={<ReactMemo />} path="ReactMemo"></Route>
        <Route element={<UseMemo />} path="UseMemo"></Route>
        <Route element={<UseCallback />} path="UseCallback"></Route>
      </Routes>
    </BrowserRouter>
  </div>
);
