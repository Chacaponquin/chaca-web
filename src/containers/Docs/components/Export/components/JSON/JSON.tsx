import { DatasetResult, Header } from "../../shared/components"
import { Definition, JsonParams } from "./components"

export default function JSON() {
  return (
    <>
      <Header extension="json" format="json" />

      <JsonParams />

      <Definition />

      <DatasetResult extension="json" language="json" />
    </>
  )
}
