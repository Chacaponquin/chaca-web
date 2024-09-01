import { Error } from "@modules/app/components"
import { APP_ROUTES } from "@modules/app/constants"
import { LanguageProvider } from "@modules/app/modules/language/context"
import { SocketProvider } from "@modules/app/modules/socket/context"
import { ThemeProvider } from "@modules/app/modules/theme/context"
import { ToastProvider } from "@modules/app/modules/toast/context"
import { UserProvider } from "@modules/user/context"
import { ErrorBoundary } from "react-error-boundary"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ContactUs, Error404, Home, Landing } from "./containers"
import { ModulesProvider } from "@modules/modules/context"
import { DatasetProvider } from "@modules/dataset/context"
import { ConfigProvider } from "@modules/config/context"
import { ModalProvider } from "@modules/modal/context"
import { HomeProvider } from "@containers/Home/context"
import { PlaygroundProvider } from "@modules/playground/context"
import { Overview } from "@containers/Docs/components/Api/components"
import { Command, Start } from "@containers/Docs/components/Guides/components"
import { COMMAND_LINE, GETTING_STARTED } from "@modules/docs/domain/core/sections/guides"
import { OVERVIEW } from "@modules/docs/domain/core/sections/api"
import { DocsProvider } from "@modules/docs/context"
import {
  ADDRESS,
  ANIMAL,
  COLOR,
  DATATYPE,
  DATE,
  FINANCE,
  ID,
  IMAGE,
  INTERNET,
  LOREM,
  PERSON,
  PHONE,
  SCIENCE,
  SYSTEM,
  VEHICLE,
  VIDEO,
  WORD,
} from "@modules/docs/domain/core/sections/modules"
import {
  Address,
  Animal,
  Color,
  Datatype,
  Date,
  Finance,
  Id,
  Image,
  Internet,
  Lorem,
  Person,
  Phone,
  Science,
  System,
  Vehicle,
  Video,
  Word,
} from "@containers/Docs/components/Schemas/components"
import {
  Config as FieldConfig,
  Custom,
  CustomSchemaField,
  Enum,
  NestedSchema,
  Pick,
  Probability,
  Ref,
  Sequence,
  Sequential,
} from "@containers/Docs/components/Fields/components"
import {
  FIELD_CONFIG,
  CUSTOM,
  CUSTOM_SCHEMA_FIELD,
  ENUM,
  NESTED_SCHEMA,
  PICK,
  PROBABILITY,
  REF,
  SEQUENCE,
  SEQUENTIAL,
} from "@modules/docs/domain/core/sections/field-types"

export default function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <ErrorBoundary fallback={<Error />}>
          <BrowserRouter>
            <ToastProvider>
              <UserProvider>
                <ModalProvider>
                  <DocsProvider>
                    <Routes>
                      {/* <Route path={APP_ROUTES.AUTH.LOGIN} element={<Login />} /> */}
                      {/* <Route path={APP_ROUTES.AUTH.SIGN_UP} element={<SignUp />} /> */}
                      <Route path={APP_ROUTES.CONTACT_US} element={<ContactUs />} />
                      <Route path={APP_ROUTES.ROOT} element={<Landing />} />

                      <Route
                        path={APP_ROUTES.HOME}
                        element={
                          <SocketProvider>
                            <ModulesProvider>
                              <ConfigProvider>
                                <PlaygroundProvider>
                                  <DatasetProvider>
                                    <HomeProvider>
                                      <Home />
                                    </HomeProvider>
                                  </DatasetProvider>
                                </PlaygroundProvider>
                              </ConfigProvider>
                            </ModulesProvider>
                          </SocketProvider>
                        }
                      />

                      <Route path={APP_ROUTES.NOT_FOUND} element={<Error404 />} />

                      <Route element={<Overview />} path={OVERVIEW.url} />

                      <Route element={<Command />} path={COMMAND_LINE.url} />
                      <Route element={<Start />} path={GETTING_STARTED.url} />

                      <Route element={<Address />} path={ADDRESS.url} />
                      <Route element={<Animal />} path={ANIMAL.url} />
                      <Route element={<Color />} path={COLOR.url} />
                      <Route element={<Datatype />} path={DATATYPE.url} />
                      <Route element={<Date />} path={DATE.url} />
                      <Route element={<Finance />} path={FINANCE.url} />
                      <Route element={<Id />} path={ID.url} />
                      <Route element={<Image />} path={IMAGE.url} />
                      <Route element={<Internet />} path={INTERNET.url} />
                      <Route element={<Lorem />} path={LOREM.url} />
                      <Route element={<Person />} path={PERSON.url} />
                      <Route element={<Phone />} path={PHONE.url} />
                      <Route element={<Science />} path={SCIENCE.url} />
                      <Route element={<System />} path={SYSTEM.url} />
                      <Route element={<Vehicle />} path={VEHICLE.url} />
                      <Route element={<Word />} path={WORD.url} />
                      <Route element={<Video />} path={VIDEO.url} />

                      <Route element={<FieldConfig />} path={FIELD_CONFIG.url} />
                      <Route element={<Custom />} path={CUSTOM.url} />
                      <Route element={<CustomSchemaField />} path={CUSTOM_SCHEMA_FIELD.url} />
                      <Route element={<Enum />} path={ENUM.url} />
                      <Route element={<NestedSchema />} path={NESTED_SCHEMA.url} />
                      <Route element={<Sequence />} path={SEQUENCE.url} />
                      <Route element={<Sequential />} path={SEQUENTIAL.url} />
                      <Route element={<Pick />} path={PICK.url} />
                      <Route element={<Probability />} path={PROBABILITY.url} />
                      <Route element={<Ref />} path={REF.url} />

                      <Route path="*" element={<Error404 />} />
                    </Routes>
                  </DocsProvider>
                </ModalProvider>
              </UserProvider>
            </ToastProvider>
          </BrowserRouter>
        </ErrorBoundary>
      </ThemeProvider>
    </LanguageProvider>
  )
}
