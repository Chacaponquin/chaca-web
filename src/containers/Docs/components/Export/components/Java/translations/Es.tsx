import { DatasetResult, Header } from "../../../shared/components"
import { Definition, JavaParams } from "../components"

export default function Es() {
  return (
    <>
      <Header extension="java" format="java" />
      <JavaParams />
      <Definition />
      <DatasetResult language="typescript" extension="java" />
    </>
  )
}
