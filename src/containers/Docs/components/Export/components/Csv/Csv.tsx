import { DATASET, SCHEMA } from "@modules/docs/domain/core/sections/concepts"
import {
  Info,
  Link,
  MiniCode,
  P,
  Warning,
} from "@modules/shared/modules/markdown/components/Markdown/components"
import { CsvParams, DatasetDefinition, DatasetResult, Definition } from "./components"

export default function Csv() {
  return (
    <>
      <P>
        Para exportar datos en formato <MiniCode>csv</MiniCode> se puede definir{" "}
        <MiniCode>csv</MiniCode> en la pripiedad <MiniCode>format</MiniCode> o puede configurar un
        objeto con los siguientes parámetros.
      </P>

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
