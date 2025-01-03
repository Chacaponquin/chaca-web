import { FormatsList } from "@containers/Docs/shared/components"
import { EXPORT_TITLE, TRANSFORM_TITLE } from "@modules/docs/domain/core/sections/export/overview"
import {
  H2,
  MiniCode,
  P,
  Tip,
} from "@modules/shared/modules/markdown/components/Markdown/components"
import {
  Definition,
  ExampleCode,
  ExampleResult,
  ExportParams,
  FormatTip,
  TransformDefinition,
  TransformExample,
  TransformParams,
} from "../components"

export default function En() {
  return (
    <>
      <P>
        Chaca provides the ability to export and transform data in different formats using the{" "}
        <MiniCode>chaca.export</MiniCode> and <MiniCode>chaca.transform</MiniCode> methods.
      </P>

      <P>The following formats are available for exporting data:</P>

      <FormatsList />

      <H2 title={EXPORT_TITLE} code />

      <P>
        This method is an asynchronous method which returns an array with the path of all files
        created.
      </P>

      <Definition />

      <ExportParams />

      <FormatTip />

      <P>Below we show the result of exporting the following data in the available formats.</P>

      <ExampleCode />

      <ExampleResult />

      <H2 title={TRANSFORM_TITLE} code />

      <P>
        This method transpiles data passed as a parameter to any of the defined formats. It returns
        an array of objects where the name of the created file and the generated code are stored.
      </P>

      <Tip title="Utility">
        <P>
          This method can be used to transpile data into a specific format without having to
          physically create the files.
        </P>
      </Tip>

      <TransformDefinition />

      <TransformParams />

      <FormatTip />

      <TransformExample />
    </>
  )
}
