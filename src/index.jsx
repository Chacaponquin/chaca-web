import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Home } from "./containers";
import { appRoutes } from "./shared/routes/app/appRoutes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={appRoutes.AUTH_ROUTES.LOGIN} element={<Login />} />
        <Route path="/" element={<App />}>
          <Route path={appRoutes.HOME} element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
