import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Home, Api, Docs, SignUp } from "./containers";
import { appRoutes } from "./shared/routes/app/appRoutes";

import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import UserProvider from "./shared/context/UserContext";
import NoUserRoute from "./shared/routes/protected/NoUserRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={appRoutes.AUTH_ROUTES.LOGIN}
            element={<NoUserRoute children={<Login />} />}
          />
          <Route
            path={appRoutes.AUTH_ROUTES.SIGN_UP}
            element={<NoUserRoute children={<SignUp />} />}
          />
          <Route path="/" element={<App />}>
            <Route path={appRoutes.HOME} element={<Home />} />
            <Route path={appRoutes.API} element={<Api />} />
            <Route path={appRoutes.DOCS} element={<Docs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);
