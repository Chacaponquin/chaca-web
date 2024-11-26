import { FormatsList } from "@containers/Docs/shared/components"
import { H2, MiniCode, P, Tip } from "@markdown/components/Markdown/components"
import {
  Definition,
  ExampleCode,
  ExampleResult,
  ExportParams,
  FormatTip,
  TransformDefinition,
  TransformExample,
  TransformParams,
} from "./components"
import { EXPORT_TITLE, TRANSFORM_TITLE } from "@modules/docs/domain/core/sections/export/overview"

export default function Overview() {
  return (
    <>
      <P>
        Chaca provee la posibilidad de exportar y transformar datos en diferentes formatos
        utilizando el método <MiniCode>chaca.export</MiniCode> y{" "}
        <MiniCode>chaca.transform</MiniCode>.
      </P>

      <P>Los siguientes formatos están disponibles para exportar datos:</P>

      <FormatsList />

      <H2 title={EXPORT_TITLE} code />

      <P>
        Este método constituye un método asícrono el cual devuelve un arreglo con la ruta de todos
        los archivos creados.
      </P>

      <Definition />

      <ExportParams />

      <FormatTip />

      <P>
        A continuación se muestra el resultado de exportar los siguientes datos en los formatos
        disponibles.
      </P>

      <ExampleCode />

      <ExampleResult />

      <H2 title={TRANSFORM_TITLE} code />

      <P>
        Este método transpila datos pasados como parámetro a cualquiera de los formatos definidos.
        Devuelve como resultado un arreglo de objetos donde se almacena en cada uno de estos el
        nombre del archivo creado y el código generado.
      </P>

      <Tip title="Utilidad">
        <P>
          Se puede utilizar este método para transpilar los datos a un formato específico sin
          necesidad de crear los archivos de forma física.
        </P>
      </Tip>

      <TransformDefinition />

      <TransformParams />

      <FormatTip />

      <TransformExample />
    </>
  )
}
