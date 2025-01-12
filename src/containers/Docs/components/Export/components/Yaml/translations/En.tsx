import { Danger, P } from "@modules/shared/modules/markdown/components/Markdown/components"
import { DatasetResult, Header } from "../../../shared/components"
import { Definition, YamlParams } from "../components"

export default function En() {
  return (
    <>
      <Header extension="yml" format="yaml" />
      <YamlParams />
      <Definition />

      <Danger title="What can be exported?">
        <P>
          If you try to export data that are regular expressions or functions, these will not be
          exported.
        </P>
      </Danger>

      <DatasetResult extension="yaml" language="yaml" />
    </>
  )
}
