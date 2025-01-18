import { Error } from "@modules/app/components"
import { APP_ROUTES } from "@modules/app/constants"
import { LanguageProvider } from "@modules/app/modules/language/context"
import { SocketProvider } from "@modules/app/modules/socket/context"
import { ThemeProvider } from "@modules/app/modules/theme/context"
import { ToastProvider } from "@modules/app/modules/toast/context"
import { UserProvider } from "@modules/user/context"
import { ErrorBoundary } from "react-error-boundary"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ContactUs, Error404 } from "./containers"
import { ModulesProvider } from "@modules/modules/context"
import { DatasetProvider } from "@modules/dataset/context"
import { ConfigProvider } from "@modules/config/context"
import { ModalProvider } from "@modules/modal/context"
import { HomeProvider } from "@containers/Home/context"
import { PlaygroundProvider } from "@modules/playground/context"
import {
  ModuleValue,
  Overview,
  SchemaArray,
  SchemaObject,
  Dataset as ApiDataset,
  TransformDataset,
  TransformSchema,
} from "@containers/Docs/components/Api/components"
import {
  Command,
  Introduction,
  Usage,
  Utils,
} from "@containers/Docs/components/GetStarted/components"
import {
  COMMAND_LINE,
  INTRODUCTION,
  USAGE,
  UTILS,
} from "@modules/docs/domain/core/sections/get-started"
import {
  MODULE_VALUE,
  OVERVIEW,
  SCHEMA_ARRAY,
  SCHEMA_OBJECT,
  DATASET as API_DATASET,
  TRANSFORM_DATASET,
  TRANSFORM_SCHEMA,
} from "@modules/docs/domain/core/sections/api"
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
  OVERVIEW as MODULE_OVERVIEW,
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
  Overview as ModulesOverview,
} from "@containers/Docs/components/Modules/components"
import {
  Custom,
  Enum,
  Pick,
  Probability,
  Ref,
  Sequence,
  Sequential,
  Key,
} from "@containers/Docs/components/Fields/components"
import {
  CUSTOM,
  ENUM,
  PICK,
  PROBABILITY,
  REF,
  SEQUENCE,
  SEQUENTIAL,
  KEY,
} from "@modules/docs/domain/core/sections/field-types"
import {
  Dataset,
  DatasetStore,
  Schema,
  SchemaField,
} from "@containers/Docs/components/Concepts/components"
import {
  DATASET,
  DATASET_STORE,
  SCHEMA,
  SCHEMA_FIELD,
} from "@modules/docs/domain/core/sections/concepts"
import {
  Csv,
  JSON,
  Java,
  Javascript,
  Overview as ExportOverview,
  Postgresql,
  Python,
  Typescript,
  Yaml,
} from "@containers/Docs/components/Export/components"
import {
  CSV,
  OVERVIEW as EXPORT_OVERVIEW,
  JAVA,
  JS,
  JSON as JSON_SECTION,
  POSTGRES,
  PYTHON,
  TYPESCRIPT,
  YAML,
} from "@modules/docs/domain/core/sections/export"
import { lazy, Suspense } from "react"
import LazyLoader from "@modules/app/components/LazyLoader/LazyLoader"

const Home = lazy(() => import("./containers/Home/Home"))
const Landing = lazy(() => import("./containers/Landing/Landing"))
const DocLayout = lazy(() => import("./modules/docs/components/DocLayout/DocLayout"))

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
                      <Route path={APP_ROUTES.CONTACT_US} element={<ContactUs />} />
                      <Route
                        path={APP_ROUTES.ROOT}
                        element={
                          <Suspense fallback={<LazyLoader />}>
                            <Landing />
                          </Suspense>
                        }
                      />

                      <Route
                        path={APP_ROUTES.HOME}
                        element={
                          <Suspense fallback={<LazyLoader />}>
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
                          </Suspense>
                        }
                      />

                      <Route path={APP_ROUTES.NOT_FOUND} element={<Error404 />} />

                      <Route
                        path={APP_ROUTES.DOCS.ROOT}
                        element={
                          <Suspense fallback={<LazyLoader />}>
                            <DocLayout />
                          </Suspense>
                        }
                      >
                        <Route element={<Overview />} path={OVERVIEW.url} />
                        <Route element={<ModuleValue />} path={MODULE_VALUE.url} />
                        <Route element={<SchemaArray />} path={SCHEMA_ARRAY.url} />
                        <Route element={<SchemaObject />} path={SCHEMA_OBJECT.url} />
                        <Route element={<ApiDataset />} path={API_DATASET.url} />
                        <Route element={<TransformSchema />} path={TRANSFORM_SCHEMA.url} />
                        <Route element={<TransformDataset />} path={TRANSFORM_DATASET.url} />

                        <Route element={<Dataset />} path={DATASET.url} />
                        <Route element={<DatasetStore />} path={DATASET_STORE.url} />
                        <Route element={<Schema />} path={SCHEMA.url} />
                        <Route element={<SchemaField />} path={SCHEMA_FIELD.url} />

                        <Route element={<Command />} path={COMMAND_LINE.url} />
                        <Route element={<Introduction />} path={INTRODUCTION.url} />
                        <Route element={<Usage />} path={USAGE.url} />
                        <Route element={<Utils />} path={UTILS.url} />

                        <Route element={<ModulesOverview />} path={MODULE_OVERVIEW.url} />
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

                        <Route element={<Custom />} path={CUSTOM.url} />
                        <Route element={<Enum />} path={ENUM.url} />
                        <Route element={<Key />} path={KEY.url} />
                        <Route element={<Sequence />} path={SEQUENCE.url} />
                        <Route element={<Sequential />} path={SEQUENTIAL.url} />
                        <Route element={<Pick />} path={PICK.url} />
                        <Route element={<Probability />} path={PROBABILITY.url} />
                        <Route element={<Ref />} path={REF.url} />

                        <Route element={<ExportOverview />} path={EXPORT_OVERVIEW.url} />
                        <Route element={<Csv />} path={CSV.url} />
                        <Route element={<Java />} path={JAVA.url} />
                        <Route element={<Javascript />} path={JS.url} />
                        <Route element={<JSON />} path={JSON_SECTION.url} />
                        <Route element={<Postgresql />} path={POSTGRES.url} />
                        <Route element={<Python />} path={PYTHON.url} />
                        <Route element={<Typescript />} path={TYPESCRIPT.url} />
                        <Route element={<Yaml />} path={YAML.url} />
                      </Route>

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
