import { SCHEMA } from "@modules/docs/domain/core/sections/concepts"
import { H2, Info, Link, MiniCode, P } from "@markdown/components/Markdown/components"
import { Comparation, SectionsList, Usage, UsageSchema } from "../components"
import { CUSTOM } from "@modules/docs/domain/core/sections/field-types"
import { PERSON } from "@modules/docs/domain/core/sections/modules"
import { OVERVIEW } from "@modules/docs/domain/core/sections/api"
import { API_ID, USAGE } from "@modules/docs/domain/core/sections/modules/overview"

export default function Es() {
  return (
    <>
      <P>
        Para generar los datos de cada campo dentro de un <Link to={SCHEMA.redirect}>schema</Link>{" "}
        existen algoritmos generales que ayudan a generar valores para dominios específicos. Por
        ejemplo: emails, nombres de usuario, valores numéricos, contraseñas, imágenes, entre otros,
        que resultan difíciles de volver a implementar o buscar cada vez que se quieran utilizar.
      </P>

      <P>
        Para solucionar esto Chaca provee una serie de módulos que consisten en funciones que
        generan valores pertenecientes a diferentes dominios. Estos módulos están separados en las
        siguientes secciones:
      </P>

      <SectionsList />

      <H2 title={USAGE} />

      <P>
        Para usar los módulos de Chaca solo debes importar <MiniCode>modules</MiniCode> dentro de
        cualquier archivo y llamar al módulo que desees utilizar.
      </P>

      <Usage />

      <P>
        Estos módulos pueden ser utilizados para definir un campo dentro de un{" "}
        <Link to={SCHEMA.redirect}>schema</Link> siendo llamados a través de un{" "}
        <Link to={CUSTOM.redirect}>campo custom</Link>.
      </P>

      <UsageSchema />

      <Info>
        <P>
          Muchas de estas secciones contienen una propiedad <MiniCode>constants</MiniCode> que
          contienen las constantes utilizadas para generar los valores.
        </P>
      </Info>

      <H2 title={API_ID} />

      <P>
        Para usar los módulos en la librería es solamente importar la variable{" "}
        <MiniCode>modules</MiniCode> dentro del archivo necesario. Pero a la hora de utilizar la{" "}
        <Link to={OVERVIEW.redirect}>API REST</Link> de Chaca para generar un valor a través de un
        módulo la forma difiere por razones obvias.
      </P>

      <P>
        Los módulos y secciones dentro de cualquier llamada a la{" "}
        <Link to={OVERVIEW.redirect}>API REST</Link> se identifican a través de un nombre que puede
        ser distinto del nombre de su método en la librería.
      </P>

      <P>
        A continuación se monstrará la diferencia a la hora de generar un valor del módulo{" "}
        <Link to={PERSON.firstNameUrl}>person.firstName</Link> utilizando la librería o utilizando
        la <Link to={OVERVIEW.redirect}>API REST</Link>.
      </P>

      <Comparation />

      <P>
        Nótese que el <MiniCode>api id</MiniCode> de este módulo es <MiniCode>first_name</MiniCode>,
        distinto al nombre de su método la librería (<MiniCode>person.firstName</MiniCode>).
      </P>

      <Info>
        <P>
          En la documentación de cada uno de los módulos se puede encontrar su{" "}
          <MiniCode>api id</MiniCode> con la que se identifica dentro de la{" "}
          <Link to={OVERVIEW.redirect}>API REST</Link>.
        </P>
      </Info>
    </>
  )
}
