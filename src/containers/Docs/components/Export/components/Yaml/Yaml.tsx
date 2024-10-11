import { Danger, P } from "@modules/shared/modules/markdown/components/Markdown/components"
import { Header } from "../../shared/components"
import { Definition, YamlParams } from "./components"

export default function Yaml() {
  return (
    <>
      <Header extension="yml" format="yaml" />
      <YamlParams />
      <Definition />

      <Danger title="¿Qué se puede exportar?">
        <P>A la función solo puedes pasarle como dato a exportar un arreglo de datos.</P>
        <P>
          Si intentas exportar datos que sean expresiones regulares o funciones estos no serán
          tenidos en cuenta para crear el archivo.
        </P>
      </Danger>
    </>
  )
}
