import { APP_ROUTES } from "@modules/shared/routes"
import { Route, Routes } from "react-router-dom"
import { Home } from "./pages"
import { lazy } from "react"

const EditDoc = lazy(() => import("./pages/EditDocumentation/EditDocumentation"))

export default function Admin() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={APP_ROUTES.ADMIN.EDIT_DOC} element={<EditDoc />} />
    </Routes>
  )
}
