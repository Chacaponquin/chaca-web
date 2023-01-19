import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {
  Login,
  Home,
  Api,
  // Docs,
  SignUp,
  Models,
  Landing,
  ContactUs,
  Error404,
} from "./containers"

import UserProvider from "./shared/context/UserContext"
import AppConfigProvider from "./shared/context/AppConfigContext"
import NoUserRoute from "./shared/routes/protected/NoUserRoute"

import { ErrorBoundary } from "./layout"
import { APP_ROUTES } from "./shared/routes/"

import "react-toastify/dist/ReactToastify.css"
import "./index.css"

import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"
import DatasetsProvider from "@modules/datasets/context/DatasetsContext"

const root = ReactDOM.createRoot(document.getElementById("root")!)

const AppCont = () => {
  return (
    <Routes>
      <Route
        path={APP_ROUTES.AUTH_ROUTES.LOGIN}
        element={
          <NoUserRoute>
            <Login />
          </NoUserRoute>
        }
      />
      <Route
        path={APP_ROUTES.AUTH_ROUTES.SIGN_UP}
        element={
          <NoUserRoute>
            <SignUp />
          </NoUserRoute>
        }
      />
      <Route path={APP_ROUTES.CONTACT_US} element={<ContactUs />} />

      <Route path='/' element={<App />}>
        <Route path={APP_ROUTES.ROOT} element={<Landing />} />
        <Route path={APP_ROUTES.HOME} element={<Home />} />
        <Route path={APP_ROUTES.API} element={<Api />} />
        <Route path={APP_ROUTES.MODELS} element={<Models />} />
        <Route path={APP_ROUTES.NOT_FOUND} element={<Error404 />} />
      </Route>

      <Route path='*' element={<Error404 />} />
    </Routes>
  )
}

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <AppConfigProvider>
          <UserProvider>
            <DatasetsProvider>
              <AppCont />
            </DatasetsProvider>
          </UserProvider>
        </AppConfigProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>,
)
