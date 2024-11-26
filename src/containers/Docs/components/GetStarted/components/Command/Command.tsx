import { DATASET, SCHEMA } from "@modules/docs/domain/core/sections/concepts"
import {
  EXPORT,
  EXPORT_JSON,
  INSTALL,
  RUN,
  EXPORT_CSV,
  EXPORT_JAVA,
  EXPORT_JS,
  EXPORT_POSTGRES,
  EXPORT_PYTHON,
  EXPORT_TS,
  EXPORT_YAML,
  EXPORT_EXAMPLE,
  DEFINE_CONFIG,
} from "@modules/docs/domain/core/sections/get-started/command-line"
import { H2, H3, Link, MiniCode, P, Tip, Warning } from "@markdown/components/Markdown/components"
import { Commands } from "../../shared/components"
import {
  ConfigFile,
  CsvParams,
  Datatypes,
  ExampleCommand,
  ExampleResult,
  FolderStructure,
  HelpExample,
  JavaParams,
  JsonParams,
  JsParams,
  PostgresParams,
  PythonParams,
  RunExample,
  Sections,
  TsParams,
  YamlParams,
} from "./components"
import { useParams } from "./hooks"
import { OVERVIEW } from "@modules/docs/domain/core/sections/export"
import { ExportParams } from "./shared/components"
import PackageJsonExample from "./components/PackageJsonExample/PackageJsonExample"

export default function Command() {
  const { EXPORT_PARAMS } = useParams()

  return (
    <>
      <P>
        El CLI (Command Line Interface) de Chaca es una herramienta para desarrolladores que permite
        crear y exportar datos de <Link to={SCHEMA.redirect}>schemas</Link> y{" "}
        <Link to={DATASET.redirect}>datasets</Link> desde una terminal de comandos.
      </P>

      <H2 title={INSTALL} />

      <P>
        Al instalar Chaca dentro de tu proyecto Nodejs ya se tiene acceso a las funcionalidades del
        CLI.
      </P>

      <Commands />

      <H2 title={RUN} />

      <P>
        Una vez instalado Chaca en tu proyecto puedes ejecutar cualquier comando disponible en la
        librería a través del ejecutable <MiniCode>chaca</MiniCode>.
      </P>

      <Warning title="Cofigurar commonjs">
        <P>
          En tu archivo <MiniCode>package.json</MiniCode> debes tener la siguiente configuración si
          deseas ejecutar el CLI correctamente.
        </P>

        <PackageJsonExample />
      </Warning>

      <RunExample />

      <P>
        Si deseas obtener ayuda acerca de cualquiera de los comandos puedes añadir el parámetro{" "}
        <MiniCode>--help</MiniCode> de forma individual.
      </P>

      <HelpExample />

      <H2 title={EXPORT} />

      <P>
        A continuación se presentan los comandos disponibles, encargados de exportar un{" "}
        <Link to={SCHEMA.redirect}>schema</Link> o <Link to={DATASET.redirect}>dataset</Link> en
        cualquiera de los formatos disponibles.
      </P>

      <Sections />

      <Tip title="Documentación de formatos">
        <P>
          Si deseas conocer las tranformaciones que ocurren para cada uno de los formatos hasta
          llegar al resultado final lo mejor es revisar la{" "}
          <Link to={OVERVIEW.redirect}>documentación</Link> de cada uno de ellos.
        </P>
      </Tip>

      <P>
        Al exportar los datos cada uno de los formatos presenta un comando individual y parámetros
        específicos para trasnformar el resultado a generar. Pero todos estos tienen los siguientes
        parámetros en común.
      </P>

      <ExportParams params={EXPORT_PARAMS} />

      <H3 title={DEFINE_CONFIG} />

      <P>
        El archivo el cual su ruta será definida como el parámetro <MiniCode>--config</MiniCode>{" "}
        debe ser un archivo Javascript que debe exportar uno de los siguientes tipos de dato:
      </P>

      <Datatypes />

      <H3 title={EXPORT_EXAMPLE} />

      <P>
        Antes de exponer la configuración específica de cada uno de los comandos se verá un caso
        práctico en el cual se exportará un <Link to={SCHEMA.redirect}>schema</Link>{" "}
        <MiniCode>User</MiniCode> en un archivo <MiniCode>users.json</MiniCode>.
      </P>

      <P>
        Para este ejemplo se tiene un proyecto el cual tiene a Chaca como dependencia y que presenta
        la siguiente estructura de archivos.
      </P>

      <FolderStructure />

      <P>
        El archivo <MiniCode>build-users.js</MiniCode> será el que será definido en el parámetro{" "}
        <MiniCode>--config</MiniCode>. Este archivo tiene el siguiente código.
      </P>

      <ConfigFile />

      <P>
        Al ejecutar el siguiente comando en la terminal se creará un archivo{" "}
        <MiniCode>user.json</MiniCode> dentro de la carpeta <MiniCode>data</MiniCode>.
      </P>

      <ExampleCommand />

      <P>
        Este archivo tendrá los 10 documentos creados del <Link to={SCHEMA.redirect}>schema</Link>{" "}
        <MiniCode>User</MiniCode>.
      </P>

      <ExampleResult />

      <H3 title={EXPORT_JSON} code />

      <JsonParams />

      <H3 title={EXPORT_CSV} code />

      <CsvParams />

      <H3 title={EXPORT_JS} code />

      <JsParams />

      <H3 title={EXPORT_POSTGRES} code />

      <PostgresParams />

      <H3 title={EXPORT_JAVA} code />

      <JavaParams />

      <H3 title={EXPORT_PYTHON} code />

      <PythonParams />

      <H3 title={EXPORT_TS} code />

      <TsParams />

      <H3 title={EXPORT_YAML} code />

      <YamlParams />
    </>
  )
}
