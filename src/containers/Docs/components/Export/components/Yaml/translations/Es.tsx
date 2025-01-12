import { Definition, YamlParams } from "../components"
import { DatasetResult, Header } from "../../../shared/components"
import { Danger, P } from "@modules/shared/modules/markdown/components/Markdown/components"

export default function Es() {
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
