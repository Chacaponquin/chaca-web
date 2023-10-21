import { Fragment } from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Landing, ContactUs, Error404, SignUp, Login, Home } from "./containers"

// CONTEXT PROVIDERS
import { DatasetsProvider } from "@modules/datasets/context"
import { UserProvider } from "@modules/user/context/UserContext"
import { LanguageProvider } from "@modules/app/modules/language/context"
import { ThemeProvider } from "@modules/app/modules/theme/context"
import { ToastProvider } from "@modules/app/modules/toast/context"
import { SocketProvider } from "@modules/app/modules/socket/context"
import { SchemasProvider } from "@modules/schemas/context"
import { ConfigProvider } from "@modules/config/context"
import { ModalProvider } from "@modules/modal/context"

// ROUTES
import { APP_ROUTES } from "@modules/app/constants"

import { ErrorBoundary } from "react-error-boundary"
import { Error } from "@modules/app/components"

// CSS
import "react-toastify/dist/ReactToastify.css"
import "./index.css"

import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"

const root = ReactDOM.createRoot(document.getElementById("root") as Element)

const AppRoutes = () => {
  return (
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

      <Route path="*" element={<Error404 />} />
    </Routes>
  )
}

root.render(
  <ErrorBoundary fallback={<Error />}>
    <BrowserRouter>
      <ToastProvider>
        <SchemasProvider>
          <LanguageProvider>
            <ThemeProvider>
              <UserProvider>
                <ConfigProvider>
                  <DatasetsProvider>
                    <ModalProvider>
                      <SocketProvider>
                        <AppRoutes />
                      </SocketProvider>
                    </ModalProvider>
                  </DatasetsProvider>
                </ConfigProvider>
              </UserProvider>
            </ThemeProvider>
          </LanguageProvider>
        </SchemasProvider>
      </ToastProvider>
    </BrowserRouter>
  </ErrorBoundary>,
)
