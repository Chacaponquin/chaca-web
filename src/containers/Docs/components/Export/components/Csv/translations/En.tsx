import { P, Warning } from "@modules/shared/modules/markdown/components/Markdown/components"
import { DatasetResult, Header } from "../../../shared/components"
import { CsvParams, Definition } from "../components"

export default function En() {
  return (
    <>
      <Header extension="csv" format="csv" />

      <CsvParams />

      <Definition />

      <Warning title="What can be exported?">
        <P>This format can only receive an array of objects as data to export</P>
      </Warning>

      <DatasetResult extension="csv" language="css" />
    </>
  )
}
