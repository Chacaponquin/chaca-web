import React, { Fragment, useContext } from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Landing, ContactUs, Error404 } from "./containers"
import { ErrorBoundary } from "@modules/app/components"

// CONTEXT PROVIDERS
import { AppProvider } from "@modules/app/context"
import { DatasetsProvider } from "@modules/datasets/context"
import { UserProvider } from "@modules/user/context/UserContext"
import { ModalContext, ModalProvider } from "@modules/modal/context"
import { LanguageProvider } from "@modules/app/modules/language/context"
import { ThemeProvider } from "@modules/app/modules/theme/context"

import { APP_ROUTES } from "@modules/app/constants"

import { Modal } from "@modules/modal/components"

// CSS
import "react-toastify/dist/ReactToastify.css"
import "./index.css"

import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"
import { ToastProvider } from "@modules/app/modules/toast/context"

const root = ReactDOM.createRoot(document.getElementById("root") as Element)

const Home = React.lazy(() => import("./containers/Home/Home"))
const Login = React.lazy(() => import("./containers/Auth/components/Login/Login"))
const SignUp = React.lazy(() => import("./containers/Auth/components/SignUp/SignUp"))

const AppCont = () => {
  const { openModal } = useContext(ModalContext)

  return (
    <Fragment>
      {openModal && <Modal modalProps={openModal} />}

      <Routes>
        <Route path={APP_ROUTES.AUTH_ROUTES.LOGIN} element={<Login />} />
        <Route path={APP_ROUTES.AUTH_ROUTES.SIGN_UP} element={<SignUp />} />
        <Route path={APP_ROUTES.CONTACT_US} element={<ContactUs />} />

        <Route path={APP_ROUTES.ROOT} element={<App />}>
          <Fragment>
            <Route path={APP_ROUTES.ROOT} element={<Landing />} />
            <Route path={APP_ROUTES.HOME} element={<Home />} />
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
        <ToastProvider>
          <AppProvider>
            <LanguageProvider>
              <ThemeProvider>
                <UserProvider>
                  <DatasetsProvider>
                    <ModalProvider>
                      <Fragment>
                        <AppCont />
                      </Fragment>
                    </ModalProvider>
                  </DatasetsProvider>
                </UserProvider>
              </ThemeProvider>
            </LanguageProvider>
          </AppProvider>
        </ToastProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </React.Fragment>,
)
