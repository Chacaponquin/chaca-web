import { P, Warning } from "@markdown/components/Markdown/components"
import { CsvParams, Definition } from "../components"
import { DatasetResult, Header } from "../../../shared/components"

export default function Es() {
  return (
    <>
      <Header extension="csv" format="csv" />

      <CsvParams />

      <Definition />

      <Warning title="¿Qué se puede exportar?">
        <P>Este formato solo puede recibir como dato a exportar un arreglo de objetos</P>
      </Warning>

      <DatasetResult extension="csv" language="css" />
    </>
  )
}
