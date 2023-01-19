import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {
  Login,
  // Docs,
  SignUp,
  Landing,
  ContactUs,
  Error404,
} from "./containers"

import { AppConfigProvider } from "@modules/shared/context"
import { DatasetsProvider } from "@modules/datasets/context"
import { UserProvider } from "@modules/user/context/UserContext"
import { ModalProvider } from "@modules/modal/context"

import { NoUserRoute, APP_ROUTES, LazyRoute } from "@modules/shared/routes"

import { ErrorBoundary } from "./layout"

import "react-toastify/dist/ReactToastify.css"
import "./index.css"

import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"

const root = ReactDOM.createRoot(document.getElementById("root")!)

const Home = React.lazy(() => import("./containers/Home/Home"))
const Api = React.lazy(() => import("./containers/Api/Api"))
const Models = React.lazy(() => import("./containers/Models/Models"))

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
        <Route
          path={APP_ROUTES.HOME}
          element={
            <LazyRoute
              element={
                <ModalProvider>
                  <Home />
                </ModalProvider>
              }
            />
          }
        />
        <Route path={APP_ROUTES.API} element={<LazyRoute element={<Api />} />} />
        <Route path={APP_ROUTES.MODELS} element={<LazyRoute element={<Models />} />} />
        <Route path={APP_ROUTES.NOT_FOUND} element={<Error404 />} />
      </Route>

      <Route path='*' element={<Error404 />} />
    </Routes>
  )
}

root.render(
  <React.Fragment>
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
  </React.Fragment>,
)
