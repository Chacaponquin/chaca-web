import { DatasetResult, Header } from "../../shared/components"
import { Definition, TsParams } from "./components"

export default function Typescript() {
  return (
    <>
      <Header extension="ts" format="typescript" />
      <TsParams />
      <Definition />
      <DatasetResult extension="typescript" language="typescript" />
    </>
  )
}
