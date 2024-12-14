import {
  ExternalLink,
  H2,
  List,
  ListItem,
  MiniCode,
  P,
} from "@markdown/components/Markdown/components"
import { CodesTable, Error, Features } from "../components"
import {
  ERROR_MESSAGE,
  RATE_LIMIT,
  RESPONSE_CODES,
  WHAT_API,
  WHY_RATE_LIMIT,
  WHY_USE,
} from "@modules/docs/domain/core/sections/api/overview"
import { JSON_URL } from "../domain/routes"

export default function Es() {
  return (
    <>
      <P>
        Nuestra API está creada a partir de REST, con URLs orientadas a los recursos a obtener, usa
        respuestas HTTP estandarizados y devuelve respuestas en formato{" "}
        <ExternalLink to={JSON_URL}>JSON</ExternalLink>.
      </P>

      <P>
        Con nuestra API REST se puede explotar las siguientes functionalidades expuestas en la
        librería solamente con una llamada HTTP desde una aplicación web:
      </P>

      <Features />

      <H2 title={WHAT_API} />

      <P>
        API representa una abreviatura de Application Programming Interface. Una API constituye una
        serie de reglas que permite a los programas comunicarse entre sí, exponiendo funcionalidades
        y datos de forma consistente a través del Internet.
      </P>

      <P>
        Por otro lado, REST representa una abreviatura de Representational State Transfer. Esto es
        un patrón arquitectónico que describe como sistemas distribuidos pueden exportar interfaces
        consistentes. Cuando las personas utilizan el término API REST, suelen referirse a una API
        accesible mediante el protocolo HTTP con unas URLs predefinidas.
      </P>

      <P>
        Estas URLs representan varios recursos, información o contenido que puede ser devuelto en
        formato JSON, HTML, archivo de audio o imagen. Estos recursos poseen en su mayoría varios
        métodos de acceso HTTP como: <MiniCode>GET</MiniCode>, <MiniCode>POST</MiniCode>,{" "}
        <MiniCode>PUT</MiniCode>, <MiniCode>DELETE</MiniCode>.
      </P>

      <H2 title={WHY_USE} />

      <P>La API REST de Chaca puede ser de gran utilidad en los siguientes escenarios:</P>

      <List>
        <ListItem>
          <P>
            No te encuentras desarrollando en un entorno Javascript que permita utilizar la
            librería.
          </P>
        </ListItem>

        <ListItem>
          <P>
            No deseas descargar una dependencia que pueda comprometer el tamaño de tu aplicación
            web.
          </P>
        </ListItem>

        <ListItem>
          <P>
            Deseas simular las peticiones de datos con llamadas HTTP en caso de no tener un backend
            terminado.
          </P>
        </ListItem>
      </List>

      <H2 title={RATE_LIMIT} />

      <P>
        La cantidad de peticiones HTTP que puede realizar un usuario poseen un valor máximo que no
        puede ser superado durante un período de tiempo. Cuando se excede este límite, la petición a
        la API falla y devuelve un código de estado <MiniCode>429</MiniCode>. Este código indica que
        el usuario ha realizado demasiadas peticiones en un período de tiempo. Este límite es
        aplicado según la dirección IP del cliente.
      </P>

      <P>
        El límite de peticiones está definido en <MiniCode>1000</MiniCode> peticiones por hora.
      </P>

      <H2 title={WHY_RATE_LIMIT} />

      <P>
        El límite de peticiones es necesario para prevenir que la aplicación se vea sobrecargada por
        una cantidad grande de peticiones. Esto puede deberse a un ataque de hacking, sobreuso de la
        API por un bot, o un bug en el código.
      </P>

      <P>Imponer un límite de peticiones permite evitar los siguientes ataques:</P>

      <List>
        <ListItem>
          <P>Ataque de fuerza bruta.</P>
        </ListItem>
        <ListItem>
          <P>Ataque DDOS.</P>
        </ListItem>
        <ListItem>
          <P>Web scraping.</P>
        </ListItem>
      </List>

      <H2 title={ERROR_MESSAGE} />

      <P>
        Si un error ocurre en alguno de los procesos la respuesta a la petición HTTP tendrá la
        siguiente estructura.
      </P>

      <Error />

      <H2 title={RESPONSE_CODES} />

      <P>
        De forma general, los códigos en el rango <MiniCode>2xx</MiniCode> indican una respuesta
        exitosa. Los códigos en el rango <MiniCode>4xx</MiniCode> indican la ocurrencia de un error
        debido a los parámetros requeridos.
      </P>

      <CodesTable />
    </>
  )
}
