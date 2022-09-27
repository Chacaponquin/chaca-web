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
} from "./containers";
import UserProvider, { UserContext } from "./shared/context/UserContext";
import NoUserRoute from "./shared/routes/protected/NoUserRoute";
import { APP_ROUTES } from "./shared/routes/app/APP_ROUTES";

import "react-toastify/dist/ReactToastify.css";
import "./index.css";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { useContext } from "react";
import LoaderContainer from "./shared/components/Loader/LoaderContainer";
import { AppConfigContext } from "./shared/context/AppConfigContext";

const root = ReactDOM.createRoot(document.getElementById("root")!);

const Loader = () => {
  const { loading } = useContext(UserContext);
  const { initialFetchLoading } = useContext(AppConfigContext);

  return (
    <div className="w-screen overflow-hidden h-screen flex justify-center items-center">
      <LoaderContainer
        className={"w-[200px] esm:w-[120px]"}
        loading={loading || initialFetchLoading}
      />
    </div>
  );
};

const AppCont = () => {
  const { loading } = useContext(UserContext);

  if (loading) return <Loader />;

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

root.render(
  <React.StrictMode>
    <UserProvider>
      <AppCont />
    </UserProvider>
  </React.StrictMode>
);
