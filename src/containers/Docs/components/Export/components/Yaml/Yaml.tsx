import { Danger, P } from "@markdown/components/Markdown/components"
import { DatasetResult, Header } from "../../shared/components"
import { Definition, YamlParams } from "./components"

export default function Yaml() {
  return (
    <>
      <Header extension="yml" format="yaml" />
      <YamlParams />
      <Definition />

      <Danger title="¿Qué se puede exportar?">
        <P>
          Si intentas exportar datos que sean expresiones regulares o funciones estos no serán
          tenidos en cuenta para crear el archivo.
        </P>
      </Danger>

      <DatasetResult extension="yaml" language="yaml" />
    </>
  )
}
