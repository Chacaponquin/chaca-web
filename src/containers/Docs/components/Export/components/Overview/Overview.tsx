import { Content, FormatsList } from "@containers/Docs/shared/components"
import { MiniCode, P } from "@modules/shared/modules/markdown/components/Markdown/components"
import { Definition, ExampleCode, ExampleResult, ExportParams } from "./components"

export default function Overview() {
  return (
    <Content>
      <P>
        Chaca provee la posibilidad de exportar datos en archivos externos en diferentes formatos
        utilizando el método <MiniCode>chaca.export</MiniCode>. Este es un método asíncrono que
        devuelve un arreglo con la ruta de todos los archivos creados.
      </P>

      <P>Los siguientes formatos están disponibles para exportar datos:</P>

      <FormatsList />

      <Definition />

      <ExportParams />

      <P>
        A continuación se muestra el resultado de exportar los siguientes datos en los formatos
        disponibles.
      </P>

      <ExampleCode />

      <ExampleResult />
    </Content>
  )
}
