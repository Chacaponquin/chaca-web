import { Content } from "@containers/Docs/shared/components"
import { DOCS_IMAGE } from "@modules/docs/domain/constants/image"
import { OVERVIEW } from "@modules/docs/domain/core/sections/api"
import { SCHEMA } from "@modules/docs/domain/core/sections/concepts"
import { ADDRESS } from "@modules/docs/domain/core/sections/modules"
import {
  ExternalLink,
  H2,
  Img,
  Link,
  List,
  ListItem,
  P,
} from "@modules/shared/modules/markdown/components/Markdown/components"
import { Commands } from "./components"

export default function Introduction() {
  const NODE_LINK = "https://nodejs.org/en"
  const UNPLASH_LINK = "https://unsplash.com/developers"
  const LOREM_PICSUM_LINK = "https://picsum.photos/"
  const FALSO_LINK = "https://ngneat.github.io/falso/"
  const FAKER_LINK = "https://next.fakerjs.dev/"
  const MOCKAROO_LINK = "https://www.mockaroo.com/"

  return (
    <Content>
      <P>
        Chaca es una pieza de software que permite crear y exportar grandes cantidades de mock data
        (información falsa pero realista) a través de <Link to={SCHEMA.redirect}>schemas</Link>{" "}
        definidos y personalizados por el desarrollador a través de diferentes herramientas:
      </P>

      <List>
        <ListItem>
          Una librería para generar y exportar datos en proyectos{" "}
          <ExternalLink to={NODE_LINK}>Nodejs</ExternalLink>
        </ListItem>
        <ListItem>
          Una <Link to={OVERVIEW.redirect}>REST API</Link> para generar datos con peticiones HTTP
          simulando un backend real
        </ListItem>
        <ListItem>
          Una plataforma web para desarrolladores que de forma interactiva pueden definir los
          esquemas de los datasets
        </ListItem>
      </List>

      <P>
        Estas herramientas están soportadas por{" "}
        <Link to={ADDRESS.redirect}>módulos predefinidos</Link> que permiten crear valores
        comúnmente utilizados en aplicaciones (email, contraseñas, colores, nombres de usuario,
        entre otros) a través de diferentes algoritmos.
      </P>

      <P>Estos datos generados pueden ser utilizados en:</P>

      <List>
        <ListItem>Test unitarios</ListItem>
        <ListItem>E2E tests</ListItem>
        <ListItem>Construcción de demos</ListItem>
      </List>

      <H2>About</H2>

      <P>
        En los últimos años las aplicaciones web han escalado en gran medida, haciendo que exista
        una alta dependencia entre los equipos a la hora de desarrollar, sobre todo por la necesidad
        de datos que deben ser transferidos entre componentes para un correcto funcionamiento.
      </P>

      <Img src={DOCS_IMAGE.COMPONENT_DEPENDENCY} />

      <P>
        Para estos casos, simular la entrada de datos en un componente resulta una forma funcional
        de eliminar esta dependencia, esta técnica es popularmente conocida como mocking, utilizada
        en su mayoría para realizar pruebas, construir aplicaciones de prueba o desarrollar sin la
        necesidad de un backend terminado.
      </P>

      <P>
        Para realizar esta técnica existen diferentes herramientas que implementan soluciones
        distintas pero cumplen con el mismo objetivo:
      </P>

      <List>
        <ListItem>
          <ExternalLink to={FAKER_LINK}>Faker</ExternalLink> o{" "}
          <ExternalLink to={FALSO_LINK}>Falso</ExternalLink> como Nodejs SDKs
        </ListItem>
        <ListItem>
          <ExternalLink to={MOCKAROO_LINK}>Mockaroo</ExternalLink> como plataforma web para generar
          datos
        </ListItem>
        <ListItem>
          <ExternalLink to={UNPLASH_LINK}>Unplash</ExternalLink>,{" "}
          <ExternalLink to={LOREM_PICSUM_LINK}>Lorem Picsum</ExternalLink>, Shazam con REST API
          públicas que brindan datos realistas de un sector específico
        </ListItem>
      </List>

      <P>
        Chaca constituye un software que unifica todas estas herramientas permitiendo a su vez la
        creación de datos relacionales y exportarlos en diferentes formatos de archivo.
      </P>

      <H2>Instalación</H2>

      <P>
        Puedes añadir Chaca a tu proyecto Nodejs con un solo comando de consola con tu administrador
        de paquetes favorito.
      </P>

      <Commands />
    </Content>
  )
}
