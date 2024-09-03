import { Content } from "@containers/Docs/shared/components"
import { H2, MiniCode, P } from "@modules/shared/modules/markdown/components/Markdown/components"
import { GenerateValueApi, GenerateValueCode, ImportCode } from "./components"

export default function Usage() {
  return (
    <Content>
      <P>
        Ahora observemos las funcionalidades de Chaca aplicada a casos de uso reales. De todas
        formas, eres bienvenido a plantear otros casos de uso para poder aportar más ejemplos.
      </P>

      <P>
        Para utilizar Chaca solo es necesario importar <MiniCode>chaca</MiniCode> o{" "}
        <MiniCode>modules</MiniCode>
      </P>

      <ImportCode />

      <H2>Generar valores de un módulo</H2>

      <P>
        El caso de uso más simple es la generación de valores de los modules definidos en la
        librería
      </P>

      <GenerateValueCode />

      <P>
        Si deseas generar valores de un módulo desde una aplicación web sin necesidad de instalar la
        librería se pueden generar a través de una petición HTTP.
      </P>

      <GenerateValueApi />
    </Content>
  )
}
