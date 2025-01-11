import { DatasetResult, Header } from "../../../shared/components"
import { Definition, JsParams } from "../components"

export default function Es() {
  return (
    <>
      <Header extension="js" format="javascript" />
      <JsParams />
      <Definition />
      <DatasetResult extension="javascript" language="javascript" />
    </>
  )
}
