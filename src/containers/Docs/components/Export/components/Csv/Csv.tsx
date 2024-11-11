import { DATASET, SCHEMA } from "@modules/docs/domain/core/sections/concepts"
import {
  Tip,
  Link,
  MiniCode,
  P,
  Warning,
} from "@modules/shared/modules/markdown/components/Markdown/components"
import { CsvParams, DatasetDefinition, DatasetResult, Definition } from "./components"
import { Header } from "../../shared/components"

export default function Csv() {
  return (
    <>
      <Header extension="csv" format="csv" />

      <CsvParams />

      <Definition />

      <Warning title="¿Qué se puede exportar?">
        <P>Este formato solo puede recibir como dato a exportar un arreglo de objetos</P>
      </Warning>

      <Tip title="Exportar datasets">
        <P>
          Si se exportan los datos generados de un <Link to={DATASET.redirect}>dataset</Link> en
          formato <MiniCode>csv</MiniCode> se crearán varios archivos <MiniCode>csv</MiniCode> con
          los datos de cada <Link to={SCHEMA.redirect}>schema</Link> de forma separada.
        </P>

        <DatasetDefinition />

        <DatasetResult />
      </Tip>
    </>
  )
}
