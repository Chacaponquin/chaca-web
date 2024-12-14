import {
  ExternalLink,
  H2,
  List,
  ListItem,
  MiniCode,
  P,
} from "@modules/shared/modules/markdown/components/Markdown/components"
import { JSON_URL } from "../domain/routes"
import { CodesTable, Error, Features } from "../components"
import {
  ERROR_MESSAGE,
  RATE_LIMIT,
  RESPONSE_CODES,
  WHAT_API,
  WHY_RATE_LIMIT,
  WHY_USE,
} from "@modules/docs/domain/core/sections/api/overview"

export default function En() {
  return (
    <>
      <P>
        Owr API is built on REST, with URLs oriented to the resources to be obtained, it uses
        standardized HTTP responses and returns <ExternalLink to={JSON_URL}>JSON</ExternalLink>
        format responses.
      </P>

      <P>
        With our REST API you can exploit the following functionalities exposed in the library with
        just one HTTP call from a web application:
      </P>

      <Features />

      <H2 title={WHAT_API} />

      <P>
        API stands for Application Programming Interface. An API is a set of rules that allows
        programs to communicate with each other, exposing functionality and data consistently across
        the Internet.
      </P>

      <P>
        On the other hand, REST stands for Representational State Transfer. This is an architectural
        pattern that describes how distributed systems can export consistent interfaces. When people
        use the term REST API, they usually mean an API that is accessible via the HTTP protocol
        with predefined URLs.
      </P>

      <P>
        These URLs represent various resources, information or content that can be returned in JSON,
        HTML, audio file or image format. These resources mostly have several HTTP access methods
        such as: <MiniCode>GET</MiniCode>, <MiniCode>POST</MiniCode>, <MiniCode>PUT</MiniCode>,{" "}
        <MiniCode>DELETE</MiniCode>.
      </P>

      <H2 title={WHY_USE} />

      <P>Chaca's REST API can be very useful in the following scenarios:</P>

      <List>
        <ListItem>
          <P>
            You are not working with a Javascript environment that allows you to use the library.
          </P>
        </ListItem>

        <ListItem>
          <P>
            You do not want to download a dependency that may compromise the size of your web
            application.
          </P>
        </ListItem>

        <ListItem>
          <P>
            You want to simulate data requests with HTTP calls in case you do not have a finished
            backend.
          </P>
        </ListItem>
      </List>

      <H2 title={RATE_LIMIT} />

      <P>
        The number of HTTP requests that a user can make has a maximum value that cannot be exceeded
        during a period of time. When this limit is exceeded, the request to the API fails and
        returns a status code <MiniCode>429</MiniCode>. This code indicates that the user has made
        too many requests on a time period. This limit is applied based on the client's IP address.
      </P>

      <P>
        The request limit is set to <MiniCode>1000</MiniCode> requests per hour.
      </P>

      <H2 title={WHY_RATE_LIMIT} />

      <P>
        The request limit is necessary to prevent the application from being overwhelmed by a large
        amount of requests. This can be due to a hacking attack, overuse of the API by a bot, or a
        bug in the code.
      </P>

      <P>Imposing a request limit helps prevent the following attacks:</P>

      <List>
        <ListItem>
          <P>Brute force attack.</P>
        </ListItem>
        <ListItem>
          <P>DDOS attack.</P>
        </ListItem>
        <ListItem>
          <P>Web scraping.</P>
        </ListItem>
      </List>

      <H2 title={ERROR_MESSAGE} />

      <P>
        If an error occurs in any of the processes the response to the HTTP request will have the
        following structure.
      </P>

      <Error />

      <H2 title={RESPONSE_CODES} />

      <P>
        In general, codes on <MiniCode>2xx</MiniCode> range indicate a successful response. Codes on{" "}
        <MiniCode>4xx</MiniCode> range indicate the occurrence of an error due to required
        parameters.
      </P>

      <CodesTable />
    </>
  )
}
