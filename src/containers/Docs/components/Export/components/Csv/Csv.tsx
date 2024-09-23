import { DATASET, SCHEMA } from "@modules/docs/domain/core/sections/concepts"
import {
  Info,
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
        <P>Solo pueden ser exportados datos en forma de objeto.</P>
      </Warning>

      <Info>
        <P>
          Si se exportan los datos de un <Link to={DATASET.redirect}>dataset</Link> en formato{" "}
          <MiniCode>csv</MiniCode> se crearán varios archivos <MiniCode>csv</MiniCode> con los datos
          de cada <Link to={SCHEMA.redirect}>schema</Link> de forma separada.
        </P>

        <DatasetDefinition />

        <DatasetResult />
      </Info>
    </>
  )
}
