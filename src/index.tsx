import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Login,
  Home,
  Api,
  // Docs,
  SignUp,
  MySchema,
  Landing,
  ContactUs,
  Error404,
} from "./containers";

import UserProvider from "./shared/context/UserContext";
import AppConfigProvider from "./shared/context/AppConfigContext";
import NoUserRoute from "./shared/routes/protected/NoUserRoute";

import { APP_ROUTES } from "./shared/routes/app/APP_ROUTES";

import "react-toastify/dist/ReactToastify.css";
import "./index.css";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);

const AppCont = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={APP_ROUTES.AUTH_ROUTES.LOGIN}
          element={<NoUserRoute children={<Login />} />}
        />
        <Route
          path={APP_ROUTES.AUTH_ROUTES.SIGN_UP}
          element={<NoUserRoute children={<SignUp />} />}
        />
        <Route path={APP_ROUTES.CONTACT_US} element={<ContactUs />} />

        <Route path="/" element={<App />}>
          <Route path={APP_ROUTES.ROOT} element={<Landing />} />
          <Route path={APP_ROUTES.HOME} element={<Home />} />
          <Route path={APP_ROUTES.API} element={<Api />} />
          {/*<Route path={APP_ROUTES.DOCS} element={<Docs />} />*/}
          <Route path={APP_ROUTES.MY_SCHEMA} element={<MySchema />} />
          <Route path={APP_ROUTES.NOT_FOUND} element={<Error404 />} />
        </Route>

        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

root.render(
  <React.StrictMode>
    <AppConfigProvider>
      <UserProvider>
        <AppCont />
      </UserProvider>
    </AppConfigProvider>
  </React.StrictMode>
);
