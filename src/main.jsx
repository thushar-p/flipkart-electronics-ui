import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import navs from "./Components/Routes/Navs.jsx";

const user = {
  username: "",
  role: "",
  isAuthenticated: false,
};

console.log("user " + typeof user);

const allRoutes = () => {
  return (
    <Route path={"/"} element={<App />}>
      {navs.map((nav, i) => {
        if (user.isAuthenticated) {
          if (nav.isVisibleAfterAuthentication) {
            if (user.role === nav.role || nav.role === "ALL") {
              console.log(nav);
              return <Route key={i} path={nav.path} element={nav.element} />;
            }
          }
        } else {
          if (!nav.authenticationRequired && nav.role === "ALL") {
            console.log(nav);
            return <Route key={i} path={nav.path} element={nav.element} />;
          }
        }
      })}
    </Route>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>{allRoutes()}</Routes>
    </BrowserRouter>
  </React.StrictMode>
);
