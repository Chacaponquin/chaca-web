import React, { Fragment, useContext } from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Landing, ContactUs, Error404 } from "./containers"

// CONTEXT PROVIDERS
import { AppConfigProvider } from "@modules/shared/context"
import { DatasetsProvider } from "@modules/datasets/context"
import { UserProvider } from "@modules/user/context/UserContext"
import { ModalContext, ModalProvider } from "@modules/modal/context"

import { NoUserRoute, APP_ROUTES, LazyRoute } from "@modules/shared/routes"

import { ErrorBoundary } from "./layout"

import { ToastContainer } from "react-toastify"

import { Modal } from "@modules/modal/components"

// CSS
import "react-toastify/dist/ReactToastify.css"
import "./index.css"

import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"

const root = ReactDOM.createRoot(document.getElementById("root") as Element)

const Home = React.lazy(() => import("./containers/Home/Home"))
const Api = React.lazy(() => import("./containers/Api/Api"))
const Models = React.lazy(() => import("./containers/Models/Models"))
const Login = React.lazy(() => import("./containers/Auth/components/Login/Login"))
const SignUp = React.lazy(() => import("./containers/Auth/components/SignUp/SignUp"))
const Admin = React.lazy(() => import("./containers/Admin/Admin"))

const AppCont = () => {
  const { openModal } = useContext(ModalContext)

  return (
    <Fragment>
      {openModal && <Modal modalProps={openModal} />}

      <Routes>
        <Route path={APP_ROUTES.ADMIN.ROOT} element={<Admin />} />

        <Route
          path={APP_ROUTES.AUTH_ROUTES.LOGIN}
          element={
            <LazyRoute
              element={
                <NoUserRoute>
                  <Login />
                </NoUserRoute>
              }
            />
          }
        />
        <Route
          path={APP_ROUTES.AUTH_ROUTES.SIGN_UP}
          element={
            <LazyRoute
              element={
                <NoUserRoute>
                  <SignUp />
                </NoUserRoute>
              }
            />
          }
        />
        <Route path={APP_ROUTES.CONTACT_US} element={<ContactUs />} />

        <Route path='/' element={<App />}>
          <Fragment>
            <Route path={APP_ROUTES.ROOT} element={<Landing />} />
            <Route path={APP_ROUTES.HOME} element={<LazyRoute element={<Home />} />} />
            <Route path={APP_ROUTES.API} element={<LazyRoute element={<Api />} />} />
            <Route path={APP_ROUTES.MODELS} element={<LazyRoute element={<Models />} />} />
            <Route path={APP_ROUTES.NOT_FOUND} element={<Error404 />} />
          </Fragment>
        </Route>

        <Route path='*' element={<Error404 />} />
      </Routes>
    </Fragment>
  )
}

root.render(
  <React.Fragment>
    <BrowserRouter>
      <ErrorBoundary>
        <AppConfigProvider>
          <UserProvider>
            <DatasetsProvider>
              <ModalProvider>
                <Fragment>
                  <ToastContainer autoClose={5000} hideProgressBar={true} />
                  <AppCont />
                </Fragment>
              </ModalProvider>
            </DatasetsProvider>
          </UserProvider>
        </AppConfigProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </React.Fragment>,
)
