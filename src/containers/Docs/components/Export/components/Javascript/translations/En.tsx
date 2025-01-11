import { Definition, JsParams } from "../components"
import { DatasetResult, Header } from "../../../shared/components"

export default function En() {
  return (
    <>
      <Header extension="js" format="javascript" />
      <JsParams />
      <Definition />
      <DatasetResult extension="javascript" language="javascript" />
    </>
  )
}
