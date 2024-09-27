import {
  ExternalLink,
  H2,
  List,
  ListItem,
  MiniCode,
  P,
} from "@modules/shared/modules/markdown/components/Markdown/components"
import { Features } from "./components"

export default function Overview() {
  const JSON_URL = "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON"

  return (
    <>
      <P>
        La API está creada a partir de REST, con URLs orientadas a los recursos a obtener, usa
        respuestas HTTP estandarizados y devuelve respuestas en formato{" "}
        <ExternalLink to={JSON_URL}>JSON</ExternalLink>.
      </P>

      <P>
        Con nuestra API REST se puede explotar las siguientes functionalidades expuestas en la
        librería solamente con una llamada HTTP desde una aplicación web:
      </P>

      <Features />

      <H2>¿Qué es una API REST?</H2>

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

      <H2>¿Por qué deberías utilizar la API REST?</H2>

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

      <H2>Límite de peticiones</H2>

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

      <H2>¿Por qué existe un límite de peticiones?</H2>

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
          <P>Web scaping.</P>
        </ListItem>
      </List>
    </>
  )
}
