import { Error } from "@modules/app/components"
import { APP_ROUTES } from "@modules/app/constants"
import { LanguageProvider } from "@modules/app/modules/language/context"
import { SocketProvider } from "@modules/app/modules/socket/context"
import { ThemeProvider } from "@modules/app/modules/theme/context"
import { ToastProvider } from "@modules/app/modules/toast/context"
import { UserProvider } from "@modules/user/context/UserContext"
import { ErrorBoundary } from "react-error-boundary"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ContactUs, Error404, Home, Landing, Login, SignUp } from "./containers"
import { SchemasProvider } from "@modules/schemas/context"
import { DatasetsProvider } from "@modules/datasets/context"
import { ConfigProvider } from "@modules/config/context"
import { ModalProvider } from "@modules/modal/context"
import { HomeProvider } from "@containers/Home/context"

function App() {
  return (
    <ErrorBoundary fallback={<Error />}>
      <BrowserRouter>
        <ToastProvider>
          <LanguageProvider>
            <ThemeProvider>
              <UserProvider>
                <SocketProvider>
                  <Routes>
                    <Route path={APP_ROUTES.AUTH_ROUTES.LOGIN} element={<Login />} />
                    <Route path={APP_ROUTES.AUTH_ROUTES.SIGN_UP} element={<SignUp />} />
                    <Route path={APP_ROUTES.CONTACT_US} element={<ContactUs />} />
                    <Route path={APP_ROUTES.ROOT} element={<Landing />} />

                    <Route
                      path={APP_ROUTES.HOME}
                      element={
                        <SchemasProvider>
                          <ConfigProvider>
                            <DatasetsProvider>
                              <ModalProvider>
                                <HomeProvider>
                                  <Home />
                                </HomeProvider>
                              </ModalProvider>
                            </DatasetsProvider>
                          </ConfigProvider>
                        </SchemasProvider>
                      }
                    />

                    <Route path={APP_ROUTES.NOT_FOUND} element={<Error404 />} />

                    <Route path="*" element={<Error404 />} />
                  </Routes>
                </SocketProvider>
              </UserProvider>
            </ThemeProvider>
          </LanguageProvider>
        </ToastProvider>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
