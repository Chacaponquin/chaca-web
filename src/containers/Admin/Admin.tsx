import { APP_ROUTES } from "@modules/shared/routes"
import { Route, Routes } from "react-router-dom"
import { Home } from "./pages"
import React from "react"

const EditDocRoute = React.lazy(() => import("./pages/EditDocumentation/EditDocumentation"))

export default function Admin() {
  return (
    <Routes>
      <Route path={""} element={<Home />} />
      <Route path={APP_ROUTES.ADMIN.EDIT_DOC} element={<EditDocRoute />} />
    </Routes>
  )
}
