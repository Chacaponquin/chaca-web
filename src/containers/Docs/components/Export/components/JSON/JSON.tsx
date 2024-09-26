import {
  Link,
  MiniCode,
  P,
  Tip,
} from "@modules/shared/modules/markdown/components/Markdown/components"
import { Header } from "../../shared/components"
import { DatasetDefinition, DatasetResult, Definition, JsonParams } from "./components"
import { DATASET, SCHEMA } from "@modules/docs/domain/core/sections/concepts"

export default function JSON() {
  return (
    <>
      <Header extension="json" format="json" />

      <JsonParams />

      <Definition />

      <Tip title="Exportar datasets separados">
        <P>
          Si deseas que los datos generados por un <Link to={DATASET.redirect}>dataset</Link> sean
          separados en archivos individuales puedes definir el parámetro{" "}
          <MiniCode>separate</MiniCode> en <MiniCode>true</MiniCode>.
        </P>

        <P>
          En el siguiente ejemplo se visualiza como se verían los resultados de los{" "}
          <Link to={SCHEMA.redirect}>schemas</Link> <MiniCode>User</MiniCode> y{" "}
          <MiniCode>Product</MiniCode> al ser generados.
        </P>

        <DatasetDefinition />

        <DatasetResult />
      </Tip>
    </>
  )
}
