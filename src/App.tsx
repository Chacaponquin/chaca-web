import { Error } from "@modules/app/components"
import { APP_ROUTES } from "@modules/app/constants"
import { LanguageProvider } from "@modules/app/modules/language/context"
import { SocketProvider } from "@modules/app/modules/socket/context"
import { ThemeProvider } from "@modules/app/modules/theme/context"
import { ToastProvider } from "@modules/app/modules/toast/context"
import { UserProvider } from "@modules/user/context"
import { ErrorBoundary } from "react-error-boundary"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ContactUs, Docs, Error404, Home, Landing } from "./containers"
import { SchemasProvider } from "@modules/schemas/context"
import { DatasetsProvider } from "@modules/datasets/context"
import { ConfigProvider } from "@modules/config/context"
import { ModalProvider } from "@modules/modal/context"
import { HomeProvider } from "@containers/Home/context"
import { DocsProvider } from "@modules/docs/context"
import { PlaygroundProvider } from "@modules/playground/context"

export default function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <ErrorBoundary fallback={<Error />}>
          <BrowserRouter>
            <ToastProvider>
              <UserProvider>
                <Routes>
                  {/* <Route path={APP_ROUTES.AUTH_ROUTES.LOGIN} element={<Login />} /> */}
                  {/* <Route path={APP_ROUTES.AUTH_ROUTES.SIGN_UP} element={<SignUp />} /> */}
                  <Route path={APP_ROUTES.CONTACT_US} element={<ContactUs />} />
                  <Route path={APP_ROUTES.ROOT} element={<Landing />} />

                  <Route
                    path={APP_ROUTES.HOME}
                    element={
                      <SocketProvider>
                        <SchemasProvider>
                          <ConfigProvider>
                            <PlaygroundProvider>
                              <DatasetsProvider>
                                <ModalProvider>
                                  <HomeProvider>
                                    <Home />
                                  </HomeProvider>
                                </ModalProvider>
                              </DatasetsProvider>
                            </PlaygroundProvider>
                          </ConfigProvider>
                        </SchemasProvider>
                      </SocketProvider>
                    }
                  />

                  <Route path={APP_ROUTES.NOT_FOUND} element={<Error404 />} />

                  <Route
                    path={APP_ROUTES.DOCS.COMPLETE}
                    element={
                      <DocsProvider>
                        <Docs />
                      </DocsProvider>
                    }
                  />
                  <Route
                    path={APP_ROUTES.DOCS.ROOT}
                    element={
                      <DocsProvider>
                        <Docs />
                      </DocsProvider>
                    }
                  />

                  <Route path="*" element={<Error404 />} />
                </Routes>
              </UserProvider>
            </ToastProvider>
          </BrowserRouter>
        </ErrorBoundary>
      </ThemeProvider>
    </LanguageProvider>
  )
}
