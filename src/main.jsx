import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes } from "react-router-dom";
import AllRoutes from "./Components/Routes/AllRoutes.jsx";
import "./index.css";
import AuthProvider from "./Components/Context/AuthProvider.jsx";

const routes = AllRoutes();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider child={<Routes>{routes}</Routes>} />
    </BrowserRouter>
  </React.StrictMode>
);
