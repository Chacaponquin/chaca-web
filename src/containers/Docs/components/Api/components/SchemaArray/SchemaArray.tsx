import { Route } from "../../shared/components"

export default function SchemaArray() {
  return (
    <>
      <Route method="post" url="api/schema/{count}" />
    </>
  )
}
